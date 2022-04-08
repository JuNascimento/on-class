using OnClass.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : BaseModel
    {
        Task<T> Create(T obj);
        Task<T> Update(T obj);
        Task<T> Update(long id, T obj);
        Task<bool> Delete(long id);
        Task<T> Get(long? id);
        Task<List<T>> Get();
        Task<bool> IsUniqueValue(T obj, string propertyName, object value);
    }
}
