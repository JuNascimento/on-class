using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IBaseService<T> where T : BaseDTO
    {
        Task<IList<T>> GetDTO();
        Task<T> GetDTO(long id);
        Task<T> CreateDTO(T dto);
        Task<T> UpdateDTO(long id, T dto);
        Task<bool> DeleteDTO(long id);
    }
}
