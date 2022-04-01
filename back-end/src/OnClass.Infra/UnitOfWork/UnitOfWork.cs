using OnClass.Infra.Context;
using OnClass.Infra.Repositories;
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

        public virtual AulaRepository AulaRepository =>
            aulaRepository ??= new AulaRepository(applicationContext);

        public DisciplinaRepository DisciplinaRepository =>
            disciplinaRepository ??= new DisciplinaRepository(applicationContext);

        public DocumentoAulaRepository DocumentoAulaRepository =>
            documentoAulaRepository ??= new DocumentoAulaRepository(applicationContext);

        public EstudanteRepository EstudanteRepository =>
            estudanteRepository ??= new EstudanteRepository(applicationContext);

        public EstudanteDisciplinaRepository EstudanteDisciplinaRepository =>
            estudanteDisciplinaRepository ??= new EstudanteDisciplinaRepository(applicationContext);

        public FrequenciaAulaRepository FrequenciaAulaRepository =>
            frequenciaAulaRepository ??= new FrequenciaAulaRepository(applicationContext);

        public InstrutorRepository InstrutorRepository =>
            instrutorRepository ??= new InstrutorRepository(applicationContext);

        public InstrutorDisciplinaRepository InstrutorDisciplinaRepository =>
            instrutorDisciplinaRepository ??= new InstrutorDisciplinaRepository(applicationContext);

        public UserRepository UserRepository =>
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
