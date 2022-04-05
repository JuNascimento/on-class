using Microsoft.EntityFrameworkCore;
using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

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

        public async Task<bool> VerificaUserNameDisponivel(string username)
        {
            var userDB = await _context.Users.AnyAsync(e => e.UserName.Equals(username));
            return userDB;
        }

        public async Task<User> GetByUserName (string username)
        {
            var userDB = await _context.Users.SingleOrDefaultAsync(e => e.UserName.Equals(username));
            return userDB;
        }

        public async Task<dynamic> GetInfoByUserId(long id)
        {
            var estudante = await _context.Estudantes.SingleOrDefaultAsync(e => e.UserId == id);
            if(estudante is not null)
            {
                return estudante;
            }
            var instrutor = await _context.Instrutores.SingleOrDefaultAsync(e => e.UserId == id);
            return instrutor;
        }
    }
}
