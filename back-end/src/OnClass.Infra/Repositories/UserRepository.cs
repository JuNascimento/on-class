using Microsoft.EntityFrameworkCore;
using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;
using System.Data.SqlClient;

namespace OnClass.Infra.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context)
        {
        }
        public UserRepository()
        {

        }

        public async Task<bool> FindUserToLoginAsync(string username, string pass)
        {
            var userDB = await _context.Users.FromSqlRaw("SELECT * FROM USER WHERE USER_NAME = @username AND PASSWORD = @password", new SqlParameter(username, pass)).FirstAsync();
            return userDB is not null;
        }
    }
}
