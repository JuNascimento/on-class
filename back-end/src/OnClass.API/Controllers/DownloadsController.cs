using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnClass.DTO;
using OnClass.Service.FileHelper.Interfaces;

namespace OnClass.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class DownloadsController : Controller
    {
        private readonly IFileHelperService _fileService;
        public DownloadsController(IFileHelperService fileService)
        {
            _fileService = fileService;
        }

        // GET: DownloadFiles/DownloadFile
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult> DownloadFile(long id)
        {
            try
            {
                var ArquivoDTO = await _fileService.GetSingleFileAsync(id);
                return File(ArquivoDTO.Item2, "application/pdf", ArquivoDTO.Item1);

            }
            catch (Exception e)
            {
                return BadRequest($"Não foi possivel baixar os arquivos:\n{e}");
            }
        }

        // Post: DownloadFiles/UploadFile
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> UploadFile([FromForm] FileDTO fileDTO)
        {
            try
            {
                var fileName = await _fileService.SaveFileAsync(fileDTO);
                if (fileName is not null)
                {
                    return Ok(new {message = $"Arquivo [{fileName}] salvo com sucesso"});
                }
                return UnprocessableEntity();

            }
            catch (Exception e)
            {
                return BadRequest($"Não foi possivel salvar o arquivo:\n{e}");
            }
        }
    }
}
