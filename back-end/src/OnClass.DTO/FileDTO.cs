using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using OnClass.Validations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class FileDTO
    {
        [Required]
        [FromForm(Name = "aula_id")]
        public long AulaId { get; set; }

        [FromForm(Name = "file_upload")]
        [AllowedExtensions(new string[] { ".pdf" })]
        public IFormFile? FormFile { get; set; }
    }


    public class DocumentoAulaDTO
    {
        [JsonPropertyName("id_arquivo")]
        public long IdArquivo { get; set; }

        [JsonPropertyName("nome_arquivo")]
        public string NomeArquivo { get; set; }
    }
}
