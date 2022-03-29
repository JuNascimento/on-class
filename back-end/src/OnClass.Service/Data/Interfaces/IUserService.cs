using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IUserService
    {
        Task<IList<EstudanteDTO>> GetEstudantes();
        Task<IList<EstudanteDTO>> GetInstrutor();
        Task<EstudanteDTO> CreateEstudante(EstudanteDTO estudanteDTO);
        Task<InstrutorDTO> CreateInstrutor(InstrutorDTO instrutorDTO);
    }
}
 