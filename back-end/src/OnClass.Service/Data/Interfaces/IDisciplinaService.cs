using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IDisciplinaService
    {
        Task<DisciplinasParaCursarDTO> EditarDisciplinasEstudante(DisciplinasParaCursarDTO disciplinasParaCursarDTO);
        Task<DisciplinasParaLecionarDTO> EditarDisciplinasInstrutor(DisciplinasParaLecionarDTO disciplinasParaLecionarDTO);
        Task<List<DisciplinaDTO>> GetDisciplinaDTOs();
        Task<List<DisciplinaDTO>> GetDisciplinasPorEstudante(long estudanteId);
        Task<List<DisciplinaDTO>> GetDisciplinasPorInstrutor(long instrutorId);
    }
}