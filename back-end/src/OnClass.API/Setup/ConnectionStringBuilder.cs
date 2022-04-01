using Microsoft.EntityFrameworkCore;

namespace OnClass.API.Setup
{
    public class ConnectionStringBuilder
    {
        public static string Build()
        {
            
            var currentEnv = Environment.GetEnvironmentVariable("CURRENT_ENV");
            var server = Environment.GetEnvironmentVariable("MYSQL_HOST");
            var initialCatalog = Environment.GetEnvironmentVariable("MYSQL_DATABASE");
            var uid = Environment.GetEnvironmentVariable("MYSQL_USER");
            var pwd = Environment.GetEnvironmentVariable("MYSQL_ROOT_PASSWORD");
            if ("CONTAINER".Equals(currentEnv))
            {
                server = @"onclass-db-mysql";
            }
            
            
            return $"server={server}; initial catalog={initialCatalog}; uid=root; pwd={pwd};SslMode=none;allowPublicKeyRetrieval=true";
        }
    }
}
