using OnClass.DTO;

namespace OnClass.Service.Authentication.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<AuthenticatedUserDTO> CreateEstudante(EstudanteDTO estudanteDTO);
        public Task<AuthenticatedUserDTO> CreateInstrutor(InstrutorDTO instrutorDTO);
        public Task<AuthenticatedUserDTO> Login(string userName, string password);
    }
}