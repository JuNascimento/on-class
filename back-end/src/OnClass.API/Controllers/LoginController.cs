using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Service.Authentication.Interfaces;

namespace OnClass.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IAuthenticationService _authenticationService;

        public LoginController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        // POST: Login
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO userDTO)
        {
            if (userDTO is null)
            {
                return BadRequest();
            }
            var autheticatedUser = await _authenticationService.Login(userDTO.UserName, userDTO.Password);
            if (autheticatedUser is not null)
            {
                return Ok(autheticatedUser);
            }

            return BadRequest(new { message = "Usuário ou senha inválidos!" });
        }
    }
}
