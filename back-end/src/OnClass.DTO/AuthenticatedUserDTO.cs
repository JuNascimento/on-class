using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class AuthenticatedUserDTO
    {
        [JsonPropertyName("username")]
        public string? UserName { get; set; }

        [JsonPropertyName("nome")]
        public string? Nome { get; set; }

        [JsonPropertyName("role")]
        public string? Role { get; set; }

        [JsonPropertyName("token")]
        public string? Token { get; set; }
    }
}
