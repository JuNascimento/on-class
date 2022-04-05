using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class AuthenticatedUserDTO
    {
        [JsonPropertyName("user_id")]
        public long? Id { get; set; }

        [JsonPropertyName("username")]
        public string? UserName { get; set; }

        [JsonPropertyName("nome")]
        public string? Nome { get; set; }

        [JsonPropertyName("role")]
        public string? Role { get; set; }

        [JsonPropertyName("token")]
        public string? Token { get; set; }

        [JsonPropertyName("primeiro_login")]
        public bool? PrimeiroLogin { get; set; }
    }
}
