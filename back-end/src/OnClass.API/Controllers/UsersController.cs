using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Exceptions;
using OnClass.Service.Data.Interfaces;

namespace OnClass.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: Users/Get
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(new { message = "Ok"});
        }

        // POST: TipoServicos/Create
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Create(UserDTO userDTO)
        {
            try
            {
                var userNovo = await _userService.CreateDTO(userDTO);
                return CreatedAtAction("Get", new { name = userNovo.UserName }, userNovo);
            }
            catch (DuplicatedEntryException e)
            {
                return UnprocessableEntity(new { message = e.Message, userDTO });
            }
        }
    }
}
