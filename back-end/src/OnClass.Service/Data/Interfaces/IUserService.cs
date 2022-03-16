using OnClass.DTO;

namespace OnClass.Service.Data.Interfaces
{
    public interface IUserService
    {
        Task<IList<UserDTO>> GetDTO();
        Task<UserDTO> GetDTO(long id);
        Task<UserDTO> CreateDTO(UserDTO dto);
        Task<UserDTO> UpdateDTO(long id, UserDTO dto);
        Task<bool> DeleteDTO(long id);
    }
}
 