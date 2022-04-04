﻿using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Helpers;
using OnClass.Infra.UnitOfWork;
using OnClass.Service.Authentication.Interfaces;

namespace OnClass.Service.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly string salt = Environment.GetEnvironmentVariable("HASH_SALT");

        public AuthenticationService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        private async Task<User> CreateUser(User user)
        {
            //user.Password = HashGenerator.HashString(user.Password, salt);
            user.GenerateHash();
            var userDB = await _uow.UserRepository.Create(user);
            return userDB;
        }

        public async Task<EstudanteDTO> CreateEstudante(EstudanteDTO estudanteDTO)
        {
            if (await _uow.UserRepository.VerificaUserNameDisponivel(estudanteDTO.UserName))
            {
                throw new DuplicatedEntryException("Já existe usuário com esse nome");
            }

            var user = _mapper.Map<User>(estudanteDTO);
            var userDB = await CreateUser(user);

            var estudante = _mapper.Map<Estudante>(estudanteDTO);
            estudante.UserId = userDB.Id;

            var estudanteDB = await _uow.EstudanteRepository.Create(estudante);

            var estudanteDTONovo = _mapper.Map<EstudanteDTO>(estudanteDB);
            estudanteDTONovo.UserName = userDB.UserName;

            return estudanteDTONovo;

        }

        public async Task<InstrutorDTO> CreateInstrutor(InstrutorDTO instrutorDTO)
        {
            if (await _uow.UserRepository.VerificaUserNameDisponivel(instrutorDTO.UserName))
            {
                throw new DuplicatedEntryException("");
            }

            var user = _mapper.Map<User>(instrutorDTO);
            var userDB = await CreateUser(user);

            var instrutor = _mapper.Map<Instrutor>(instrutorDTO);
            instrutor.UserId = userDB.Id;

            var instrutorDB = await _uow.InstrutorRepository.Create(instrutor);

            var instrutorDTONovo = _mapper.Map<InstrutorDTO>(instrutorDB);
            instrutorDTONovo.UserName = userDB.UserName;

            return instrutorDTONovo;
        }

        public async Task<AuthenticatedUserDTO> Login(string userName, string password)
        {
            var userDB = await _uow.UserRepository.GetByUserName(userName);

            if (IsValidUser(userDB, password))
            {
                var usuario = await _uow.UserRepository.GetInfoByUserId(userDB.Id);
                var authenticatedUser = new AuthenticatedUserDTO
                {
                    UserName = userDB.UserName,
                    Nome = usuario.NomeCompleto,
                    Role = usuario.GetType().Name
                };

                authenticatedUser.GenerateToken();
                return authenticatedUser;
            }
            return null;
        }

        private bool IsValidUser(User user, string password)
        {
            if (user is null)
            {
                return false;
            }
            return user.Password.Equals(HashGenerator.ComputeHash(password, user.Salt));
        }
    }
}
