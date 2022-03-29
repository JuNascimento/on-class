using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Helpers;
using OnClass.Infra.UnitOfWork;
using OnClass.Service.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Service.Data
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;
        private readonly string salt = Environment.GetEnvironmentVariable("HASH_SALT");

        public UserService(IMapper mapper, IUnitOfWork uow)
        {
            _mapper = mapper;
            _uow = uow;
        }

        private async Task<User> CreateUser(User user)
        {
            user.Password = HashGenerator.HashString(user.Password, salt);

            var userDB = await _uow.UserRepository.Create(user);
            return userDB;
        }

        public async Task<EstudanteDTO> CreateEstudante(EstudanteDTO estudanteDTO)
        {
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
            var user = _mapper.Map<User>(instrutorDTO);
            var userDB = await CreateUser(user);
            
            var instrutor = _mapper.Map<Instrutor>(instrutorDTO);
            instrutor.UserId = userDB.Id;
            
            var instrutorDB = await _uow.InstrutorRepository.Create(instrutor);

            var instrutorDTONovo = _mapper.Map<InstrutorDTO>(instrutorDB);
            instrutorDTONovo.UserName = userDB.UserName;

            return instrutorDTONovo;
        }

        public Task<IList<EstudanteDTO>> GetEstudantes()
        {
            throw new NotImplementedException();
        }

        public Task<IList<EstudanteDTO>> GetInstrutor()
        {
            throw new NotImplementedException();
        }
    }
}
