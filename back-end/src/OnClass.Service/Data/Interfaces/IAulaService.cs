using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IAulaService
    {
        public Task<AulaDTO> CriarAula(AulaDTO aulaDTO);
        public Task<AulaDTO> EditarAula(AulaDTO aulaDTO);
        public Task<List<AulaDTO>> GetAulas();
        public Task<AulaDTO> InscricaoAula(AulaEstudanteDTO aulaEstudanteDTO);
        public Task<List<AulaDTO>> PesquisarAula(BuscarAulaDTO buscarAulaDTO);
    }
}