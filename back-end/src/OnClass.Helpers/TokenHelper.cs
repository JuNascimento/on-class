using Microsoft.IdentityModel.Tokens;
using OnClass.Domain.Models;
using OnClass.DTO;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnClass.Helpers
{
    public static class TokenHelper
    {

        public static void GenerateToken(this AuthenticatedUserDTO authenticatedUserDTO)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_API_KEY").ToString());

            var rolesClaims = new List<Claim> { 
                new Claim(ClaimTypes.Role, authenticatedUserDTO.Role),
                new Claim(ClaimTypes.Name, authenticatedUserDTO.Nome),
                new Claim("Id", authenticatedUserDTO.Id.ToString())
            };
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(rolesClaims),
                Expires = DateTime.Now.AddHours(12),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = "onclass",
                Issuer = "Onclass.API"
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            authenticatedUserDTO.Token = tokenHandler.WriteToken(token);
        }
    }
}
