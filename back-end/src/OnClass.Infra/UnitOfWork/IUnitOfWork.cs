using OnClass.Infra.Repositories;

namespace OnClass.Infra.UnitOfWork
{
    public interface IUnitOfWork
    {
        UserRepository UserRepository { get; }

        void Commit();
    }
}