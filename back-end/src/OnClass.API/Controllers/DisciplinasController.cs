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
        //[Authorize]
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

        // Disciplinas/CriarDisciplinasInstrutor
        [HttpPost]
        [Authorize(Roles = "Instrutor")]
        public async Task<ActionResult<DisciplinasParaLecionarDTO>> CriarDisciplinasInstrutor(DisciplinasParaLecionarDTO disciplinasParaLecionarDTO)
        {
            try
            {
                var disciplinasParaLecionarNovo = await _disciplinaService.CriarDisciplinasInstrutor(disciplinasParaLecionarDTO);
                if (disciplinasParaLecionarNovo is null)
                {
                    return NoContent();
                }
                return Created("CriarDisciplinasInstrutor", disciplinasParaLecionarNovo);
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
