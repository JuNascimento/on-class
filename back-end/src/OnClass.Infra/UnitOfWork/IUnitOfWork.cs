using OnClass.Infra.Repositories;

namespace OnClass.Infra.UnitOfWork
{
    public interface IUnitOfWork
    {
        RoleRepository RoleRepository { get; }
        UserRepository UserRepository { get; }

        void Commit();
    }
}