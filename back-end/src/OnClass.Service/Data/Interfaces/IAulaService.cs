using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IAulaService
    {
        Task<AulaDTO> CriarAula(AulaDTO aulaDTO);
        Task<AulaDTO> EditarAula(AulaDTO aulaDTO);
        Task<List<AulaDTO>> GetAulas();
        Task<AulaDTO> InscricaoAula(AulaEstudanteDTO aulaEstudanteDTO);
        List<AulaDTO> PesquisarAula(BuscarAulaDTO buscarAulaDTO);
    }
}