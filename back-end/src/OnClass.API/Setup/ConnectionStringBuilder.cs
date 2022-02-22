using Microsoft.EntityFrameworkCore;

namespace OnClass.API.Setup
{
    public class ConnectionStringBuilder
    {
        public static string Build()
        {
            var server = Environment.GetEnvironmentVariable("MYSQL_HOST");
            var initialCatalog = Environment.GetEnvironmentVariable("MYSQL_DATABASE");
            var uid = Environment.GetEnvironmentVariable("MYSQL_USER");
            var pwd = Environment.GetEnvironmentVariable("MYSQL_ROOT_PASSWORD");
            return $"server={server}; initial catalog={initialCatalog}; uid=root; pwd={pwd};useSSL=false;allowPublicKeyRetrieval=true";
        }
    }
}
