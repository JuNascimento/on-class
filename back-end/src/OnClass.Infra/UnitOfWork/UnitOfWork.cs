using OnClass.Infra.Context;
using OnClass.Infra.Repositories;
using OnClass.Infra.Repositories.Interfaces;
using System;

namespace OnClass.Infra.UnitOfWork
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private readonly ApplicationContext applicationContext;
        private bool disposed;

        private AulaRepository aulaRepository;
        private DisciplinaRepository disciplinaRepository;
        private DocumentoAulaRepository documentoAulaRepository;
        private EstudanteRepository estudanteRepository;
        private EstudanteDisciplinaRepository estudanteDisciplinaRepository;
        private FrequenciaAulaRepository frequenciaAulaRepository;
        private InstrutorRepository instrutorRepository;
        private InstrutorDisciplinaRepository instrutorDisciplinaRepository;
        private UserRepository userRepository;

        public virtual IAulaRepository AulaRepository =>
            aulaRepository ??= new AulaRepository(applicationContext);

        public virtual IDisciplinaRepository DisciplinaRepository =>
            disciplinaRepository ??= new DisciplinaRepository(applicationContext);

        public virtual IDocumentoAulaRepository DocumentoAulaRepository =>
            documentoAulaRepository ??= new DocumentoAulaRepository(applicationContext);

        public virtual IEstudanteRepository EstudanteRepository =>
            estudanteRepository ??= new EstudanteRepository(applicationContext);

        public virtual IEstudanteDisciplinaRepository EstudanteDisciplinaRepository =>
            estudanteDisciplinaRepository ??= new EstudanteDisciplinaRepository(applicationContext);

        public virtual IFrequenciaAulaRepository FrequenciaAulaRepository =>
            frequenciaAulaRepository ??= new FrequenciaAulaRepository(applicationContext);

        public virtual IInstrutorRepository InstrutorRepository =>
            instrutorRepository ??= new InstrutorRepository(applicationContext);

        public virtual IInstrutorDisciplinaRepository InstrutorDisciplinaRepository =>
            instrutorDisciplinaRepository ??= new InstrutorDisciplinaRepository(applicationContext);

        public virtual IUserRepository UserRepository =>
            userRepository ??= new UserRepository(applicationContext);

        public UnitOfWork(ApplicationContext _applicationContext)
        {
            applicationContext = _applicationContext;
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
