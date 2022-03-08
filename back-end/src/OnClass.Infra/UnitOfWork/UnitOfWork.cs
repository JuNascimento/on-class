using OnClass.Infra.Context;
using OnClass.Infra.Repositories;
using System;

namespace OnClass.Infra.UnitOfWork
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private readonly ApplicationContext applicationContext;
        private bool disposed;

        private RoleRepository roleRepository;
        private UserRepository userRepository;

        public virtual RoleRepository RoleRepository =>
            roleRepository ??= new RoleRepository(applicationContext);

        public virtual UserRepository UserRepository =>
            userRepository ??= new UserRepository(applicationContext);

        public UnitOfWork(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }

        public virtual async void Commit()
        {
            await applicationContext.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed && disposing)
            {
                applicationContext.Dispose();
            }
            disposed = true;
        }
        public virtual void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
