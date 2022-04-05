using System.Text;
using System.Security.Cryptography;
using OnClass.Domain.Models;

namespace OnClass.Helpers
{
    public static class HashGenerator
    {
        public static void GenerateHash(this User user)
        {
            var salt = GenerateSalt();
            user.Salt = Convert.ToBase64String(salt);
            user.Password = ComputeHash(user.Password, user.Salt);

        }

        private static byte[] GenerateSalt()
        {
            var randomNumber = RandomNumberGenerator.Create();
            var salt = new byte[32];
            randomNumber.GetBytes(salt);
            return salt;
        }

        public static string ComputeHash(string password, string saltString)
        {
            var salt = Convert.FromBase64String(saltString);

            using var hashGenator = new Rfc2898DeriveBytes(password,salt);
            hashGenator.IterationCount = 1024;
            var bytes = hashGenator.GetBytes(32);
            return Convert.ToBase64String(bytes);
        }
    }
}