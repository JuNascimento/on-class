using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IDisciplinaService
    {
        Task<List<DisciplinaDTO>> GetDisciplinaDTOs();
        Task<DisciplinasParaLecionarDTO> CriarDisciplinasInstrutor(DisciplinasParaLecionarDTO disciplinasParaLecionarDTO);
        List<DisciplinaDTO> GetDisciplinasPorInstrutor(long instrutorId);
    }
}