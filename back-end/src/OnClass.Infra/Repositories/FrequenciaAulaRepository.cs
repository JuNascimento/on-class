using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class FrequenciaAulaRepository : BaseRepository<FrequenciaAula>, IFrequenciaAulaRepository
    {
        public FrequenciaAulaRepository(ApplicationContext context) : base(context)
        {
        }
        public FrequenciaAulaRepository()
        {

        }
    }
}
