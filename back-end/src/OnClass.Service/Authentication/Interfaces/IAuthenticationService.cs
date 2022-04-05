using OnClass.DTO;

namespace OnClass.Service.Authentication.Interfaces
{
    public interface IAuthenticationService
    {
        Task<EstudanteDTO> CreateEstudante(EstudanteDTO estudanteDTO);
        Task<InstrutorDTO> CreateInstrutor(InstrutorDTO instrutorDTO);
        Task<AuthenticatedUserDTO> Login(string userName, string password);
    }
}