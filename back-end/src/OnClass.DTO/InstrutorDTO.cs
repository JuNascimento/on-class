using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class InstrutorDTO : UserDTO
    {
        [Required]
        [JsonPropertyName("cpf")]
        public string? Cpf { get; set; }
    }
}
