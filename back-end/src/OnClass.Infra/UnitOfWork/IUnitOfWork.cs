using OnClass.Infra.Repositories;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.UnitOfWork
{
    public interface IUnitOfWork
    {
        IAulaRepository AulaRepository { get; }
        IDisciplinaRepository DisciplinaRepository { get; }
        IDocumentoAulaRepository DocumentoAulaRepository { get; }
        IEstudanteRepository EstudanteRepository { get; }
        IEstudanteDisciplinaRepository EstudanteDisciplinaRepository { get; }
        IFrequenciaAulaRepository FrequenciaAulaRepository { get; }
        IInstrutorRepository InstrutorRepository { get; }
        IInstrutorDisciplinaRepository InstrutorDisciplinaRepository { get; }
        IUserRepository UserRepository { get; } 

        void Commit();
    }
}