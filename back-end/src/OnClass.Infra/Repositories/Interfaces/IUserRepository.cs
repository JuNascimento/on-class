using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        public Task<bool> VerificaUserNameDisponivel(string username);
        public Task<User> GetByUserName(string username);
        public Task<dynamic> GetInfoByUserId(long Id);

    }
}
