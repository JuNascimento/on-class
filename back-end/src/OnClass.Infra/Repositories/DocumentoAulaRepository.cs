using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class DocumentoAulaRepository : BaseRepository<DocumentoAula>, IDocumentoAulaRepository
    {
        public DocumentoAulaRepository(ApplicationContext context) : base(context)
        {
        }
        public DocumentoAulaRepository()
        {

        }
    }
}
