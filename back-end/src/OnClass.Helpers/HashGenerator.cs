using System.Text;
using System.Security.Cryptography;

namespace OnClass.Helpers
{
    public static class HashGenerator
    {
        public static string HashString(string text, string salt = "")
        {
            if (string.IsNullOrEmpty(text))
            {
                return string.Empty;
            }

            // Uses SHA256 to create the hash
            using var sha = SHA256.Create();

            // Convert the string to a byte array first, to be processed
            byte[] textBytes = Encoding.UTF8.GetBytes(text + salt);
            byte[] hashBytes = sha.ComputeHash(textBytes);

            // Convert back to a string, removing the '-' that BitConverter adds
            string hash = BitConverter
                .ToString(hashBytes)
                .Replace("-", string.Empty);

            return hash;

        }
    }
}