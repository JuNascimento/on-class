using AutoMapper;
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
            user.GenerateHash();
            user.PrimeiroLogin = true;
            var userDB = await _uow.UserRepository.Create(user);
            return userDB;
        }

        public async Task<AuthenticatedUserDTO> CreateEstudante(EstudanteDTO estudanteDTO)
        {

            await VerificaUserName(estudanteDTO.UserName);

            var user = _mapper.Map<User>(estudanteDTO);
            var userDB = await CreateUser(user);

            var estudante = _mapper.Map<Estudante>(estudanteDTO);
            estudante.UserId = userDB.Id;

            var estudanteDB = await _uow.EstudanteRepository.Create(estudante);

            var estudanteDTONovo = _mapper.Map<EstudanteDTO>(estudanteDB);
            estudanteDTONovo.UserName = userDB.UserName;

            return await Login(estudanteDTO.UserName, estudanteDTO.Password);

        }

        private async Task VerificaUserName(string username)
        {
            if(await _uow.UserRepository.VerificaUserNameDisponivel(username))
            {
                throw new DuplicatedEntryException("Já existe usuário com esse nome");
            };

        }

        public async Task<AuthenticatedUserDTO> CreateInstrutor(InstrutorDTO instrutorDTO)
        {
            await VerificaUserName(instrutorDTO.UserName);

            var user = _mapper.Map<User>(instrutorDTO);
            var userDB = await CreateUser(user);

            var instrutor = _mapper.Map<Instrutor>(instrutorDTO);
            instrutor.UserId = userDB.Id;

            var instrutorDB = await _uow.InstrutorRepository.Create(instrutor);

            var instrutorDTONovo = _mapper.Map<InstrutorDTO>(instrutorDB);
            instrutorDTONovo.UserName = userDB.UserName;

            return await Login(instrutorDTO.UserName, instrutorDTO.Password);
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
                    Role = usuario.GetType().Name,
                    PrimeiroLogin = userDB.PrimeiroLogin,
                };

                authenticatedUser.GenerateToken();
                userDB.PrimeiroLogin = false;
                await _uow.UserRepository.Update(userDB.Id, userDB);
                if(usuario is Instrutor)
                {
                    var instrutor = new AuthenticatedInstrutorDTO(usuario.Id, authenticatedUser);
                    instrutor.GenerateToken();
                    return instrutor;
                }
                var estudante = new AuthenticatedEstudanteDTO(usuario.Id, authenticatedUser);
                estudante.GenerateToken();
                return estudante;
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
