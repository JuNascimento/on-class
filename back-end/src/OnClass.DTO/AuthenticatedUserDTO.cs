using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class AuthenticatedUserDTO
    {
        public AuthenticatedUserDTO()
        {

        }
        public AuthenticatedUserDTO(string? userName, string? nome, string? role, string? token, DateTime? tokenExpiration, bool? primeiroLogin)
        {
            UserName = userName;
            Nome = nome;
            Role = role;
            Token = token;
            TokenExpiration = tokenExpiration;
            PrimeiroLogin = primeiroLogin;
        }

        public AuthenticatedUserDTO(AuthenticatedUserDTO user)
            : this(user.UserName, user.Nome, user.Role, user.Token, user.TokenExpiration, user.PrimeiroLogin)
        {

        }

        [JsonPropertyName("username")]
        public string? UserName { get; set; }

        [JsonPropertyName("nome")]
        public string? Nome { get; set; }

        [JsonPropertyName("role")]
        public string? Role { get; set; }

        [JsonPropertyName("token")]
        public string? Token { get; set; }

        [JsonPropertyName("token_expiration_date")]
        public DateTime? TokenExpiration { get; set; }

        [JsonPropertyName("primeiro_login")]
        public bool? PrimeiroLogin { get; set; }
    }

    public class AuthenticatedEstudanteDTO : AuthenticatedUserDTO
    {
        [JsonPropertyName("estudante_id")]
        public long? Id { get; set; }

        public AuthenticatedEstudanteDTO(long? id, AuthenticatedUserDTO user) : base(user)
        {
            Id = id;
        }
    }

    public class AuthenticatedInstrutorDTO : AuthenticatedUserDTO
    {
        [JsonPropertyName("instrutor_id")]
        public long? Id { get; set; }

        public AuthenticatedInstrutorDTO(long? id, AuthenticatedUserDTO user) : base(user)
        {
            Id = id;
        }
    }
}
