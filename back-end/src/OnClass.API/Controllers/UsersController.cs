using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Service.Authentication.Interfaces;


namespace OnClass.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IAuthenticationService _authenticationService;

        public UsersController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }



        // POST: Users/CreateEstudante
        [HttpPost]
        public async Task<ActionResult<AuthenticatedUserDTO>> CreateEstudante(EstudanteDTO estudanteDTO)
        {
            try
            {
                var userNovo = await _authenticationService.CreateEstudante(estudanteDTO);
                return Created("CreateEstudante", userNovo);
            }
            catch (DuplicatedEntryException e)
            {
                estudanteDTO.Password = string.Empty;
                return UnprocessableEntity(new { errors = e.Message, estudanteDTO });
            }
        }


        // POST: Users/CreateInstrutor
        [HttpPost]
        public async Task<ActionResult<AuthenticatedUserDTO>> CreateInstrutor(InstrutorDTO instrutorDTO)
        {
            try
            {
                var userNovo = await _authenticationService.CreateInstrutor(instrutorDTO);
                return Created("CreateInstrutor", userNovo);
            }
            catch (DuplicatedEntryException e)
            {
                instrutorDTO.Password = string.Empty;
                return UnprocessableEntity(new { errors = e.Message, instrutorDTO });
            }
        }
    }
}
