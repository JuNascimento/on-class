using OnClass.Validations;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class UserDTO : BaseDTO
    {
        [Required]
        [JsonPropertyName("username")]
        public string? UserName { get; set; }

        [Required]
        [JsonPropertyName("nome")]
        public string? NomeCompleto { get; set; }

        [Required]
        [JsonPropertyName("senha")]
        public string? Password { get; set; }

        [Required] 
        [JsonPropertyName("data_nascimento")]
        [AgeCheck]
        public DateTime DataNascimento { get; set; }
    }
}