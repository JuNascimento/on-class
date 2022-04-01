using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class TokenDTO
    {
        [JsonPropertyName("token")]
        public string? Token { get; set; }

        [JsonPropertyName("token_create_time")]
        public DateTime TokenCreationDate { get; set; }

        [JsonPropertyName("token_expiration_time")]
        public DateTime TokenExpirationDate { get; set; }
    }
}
