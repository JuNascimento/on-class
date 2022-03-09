using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Helpers;
using OnClass.Infra.UnitOfWork;

namespace OnClass.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly IUnitOfWork _uow;

        public LoginController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Login([FromBody]UserDTO userDTO)
        {
            if (userDTO is null)
            {
                return BadRequest();
            }
            var salt = Environment.GetEnvironmentVariable("HASH_SALT");
            var user = await _uow.UserRepository.Get();
            var currentUser = user.FirstOrDefault(e => e.UserName.Equals(userDTO.UserName) && e.Password.Equals(HashGenerator.HashString(userDTO.Password, salt)));
            if(currentUser is not null)
            {
                var roleDB = await _uow.RoleRepository.Get(currentUser.RoleId);
                return Ok(new UserDTO
                {
                    UserName = userDTO.UserName,
                    Role = roleDB.RoleName
                });
            }
            return BadRequest(new { message = "Usuário não encontrado!"});
        }
    }
}
