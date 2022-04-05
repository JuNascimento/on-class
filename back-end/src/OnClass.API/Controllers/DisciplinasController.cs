using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Service.Data.Interfaces;

namespace OnClass.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class DisciplinasController : Controller
    {
        private readonly IDisciplinaService _disciplinaService;

        public DisciplinasController(IDisciplinaService disciplinaService)
        {
            _disciplinaService = disciplinaService;
        }

        // Disciplinas/GetDisciplinas
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<DisciplinaDTO>>> GetDisciplinas()
        {
            return Ok(await _disciplinaService.GetDisciplinaDTOs());
        }

        // Disciplinas/GetDisciplinasPorInstrutor/5
        [HttpGet("{instrutorId:long}")]
        [Authorize(Roles = "Instrutor")]
        public ActionResult<List<DisciplinaDTO>> GetDisciplinasPorInstrutor(long instrutorId)
        {
            return Ok(_disciplinaService.GetDisciplinasPorInstrutor(instrutorId));
        }

        // Disciplinas/GetDisciplinasPorEstudante/5
        [HttpGet("{instrutorId:long}")]
        [Authorize(Roles = "Estudante")]
        public ActionResult<List<DisciplinaDTO>> GetDisciplinasPorEstudante(long estudanteId)
        {
            return Ok(_disciplinaService.GetDisciplinasPorEstudante(estudanteId));
        }

        // Disciplinas/EditarDisciplinasEstudante
        [HttpPost]
        [Authorize(Roles = "Estudante")]
        public async Task<ActionResult<DisciplinasParaCursarDTO>> EditarDisciplinasEstudante(DisciplinasParaCursarDTO disciplinasParaCursarDTO)
        {
            try
            {
                DisciplinasParaCursarDTO disciplinasParaCursarNovo = await _disciplinaService.EditarDisciplinasEstudante(disciplinasParaCursarDTO);
                if (disciplinasParaCursarNovo is null)
                {
                    return NoContent();
                }
                return Created("EditarDisciplinasEstudante", disciplinasParaCursarNovo);
            }
            catch (DuplicatedEntryException e)
            {
                return UnprocessableEntity(new { message = e.Message, disciplinasParaCursarDTO });
            }
            catch (Exception e)
            {
                return UnprocessableEntity(new { message = e.Message, disciplinasParaCursarDTO });
            }
        }

        // Disciplinas/EditarDisciplinasInstrutor
        [HttpPost]
        [Authorize(Roles = "Instrutor")]
        public async Task<ActionResult<DisciplinasParaLecionarDTO>> EditarDisciplinasInstrutor(DisciplinasParaLecionarDTO disciplinasParaLecionarDTO)
        {
            try
            {
                var disciplinasParaLecionarNovo = await _disciplinaService.EditarDisciplinasInstrutor(disciplinasParaLecionarDTO);
                if (disciplinasParaLecionarNovo is null)
                {
                    return NoContent();
                }
                return Created("EditarDisciplinasInstrutor", disciplinasParaLecionarNovo);
            }
            catch (DuplicatedEntryException e)
            {
                return UnprocessableEntity(new { message = e.Message, disciplinasParaLecionarDTO });
            }
            catch (Exception e)
            {
                return UnprocessableEntity(new { message = e.Message, disciplinasParaLecionarDTO });
            }
        }
    }
}
