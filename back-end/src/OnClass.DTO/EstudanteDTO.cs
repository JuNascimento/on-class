using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class EstudanteDTO : UserDTO
    {

        [Required]
        [JsonPropertyName("nome_mae")]
        public string? NomeMae { get; set; }
    }

    public class EstudanteBasicDTO
    {
        [JsonPropertyName("id")]
        public long? Id { get; set; }

        [JsonPropertyName("nome")]
        public string? NomeCompleto { get; set; }
    }
}
