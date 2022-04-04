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
        public async Task<ActionResult<UserDTO>> CreateEstudante(EstudanteDTO estudanteDTO)
        {
            try
            {
                var userNovo = await _authenticationService.CreateEstudante(estudanteDTO);
                userNovo.Password = string.Empty;
                return Created("CreateEstudante", userNovo);
            }
            catch (DuplicatedEntryException e)
            {
                estudanteDTO.Password = string.Empty;
                return UnprocessableEntity(new { message = e.Message, estudanteDTO });
            }
        }


        // POST: Users/CreateInstrutor
        [HttpPost]
        public async Task<ActionResult<UserDTO>> CreateInstrutor(InstrutorDTO instrutorDTO)
        {
            try
            {
                var userNovo = await _authenticationService.CreateInstrutor(instrutorDTO);
                userNovo.Password = string.Empty;
                return Created("CreateInstrutor", userNovo);
            }
            catch (DuplicatedEntryException e)
            {
                instrutorDTO.Password = string.Empty;
                return UnprocessableEntity(new { message = e.Message, instrutorDTO });
            }
        }
    }
}
