using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Service.Data.Interfaces;
using OnClass.Service.FileHelper.Interfaces;

namespace OnClass.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AulasController : Controller
    {
        private readonly IAulaService _aulaService;
        private readonly IFileHelperService _fileService;

        public AulasController(IAulaService aulaService, IFileHelperService fileService)
        {
            _aulaService = aulaService;
            _fileService = fileService;
        }

        // GET: Aulas/GetAulas
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<AulaDTO>>> GetAulas()
        {
            var result = await _aulaService.GetAulas();
            return Ok(result);
        }

        // GET: Aulas/GetAulasFiltradas
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<object>> GetAulasFiltradas()
        {
            var result = await _aulaService.GetAulas();
            var futuras = result.Where(e => e.DataInicio >= DateTime.Now);
            var passadas = result.Where(e => e.DataInicio < DateTime.Now);
            return Ok(new { futuras , passadas });
        }

        // GET: Aulas/GetAulas/5
        [HttpGet("{aulaId}")]
        [Authorize]
        public async Task<ActionResult<List<AulaDTO>>> GetDocumentoAula(long aulaId)
        {
            var documentoAula = await _fileService.GetDocumentoAula(aulaId);
            return Ok(documentoAula);
        }

        // POST: Aulas/PesquisarAula
        [HttpPost]
        [Authorize]
        public ActionResult<List<AulaDTO>> PesquisarAula(BuscarAulaDTO buscarAulaDTO)
        {
            var result = _aulaService.PesquisarAula(buscarAulaDTO);
            return Ok(result);
        }

        // POST: Aulas/CriarAula
        [HttpPost]
        [Authorize(Roles = "Instrutor")]
        public async Task<ActionResult<AulaDTO>> CriarAula(AulaDTO aulaDTO)
        {
            var aulaNova = await _aulaService.CriarAula(aulaDTO);
            return Ok(new {message = "Aula criada com sucesso!", aulaNova });
        }

        // POST: Aulas/EditarAula
        [HttpPost]
        [Authorize(Roles = "Instrutor")]
        public async Task<ActionResult<AulaDTO>> EditarAula(AulaDTO aulaDTO)
        {
            var aula = await _aulaService.EditarAula(aulaDTO);
            return Ok(new { message = "Aula editada com sucesso!", aula });
        }

        // POST: Aulas/InscricaoAula
        [HttpPost]
        [Authorize(Roles = "Estudante")]
        public async Task<ActionResult<AulaDTO>> InscricaoAula(AulaEstudanteDTO aulaEstudanteDTO)
        {
            var aula = await _aulaService.InscricaoAula(aulaEstudanteDTO);
            return Ok(new { message = "Inscrição na aula com sucesso!", aula });
        }
    }
}
