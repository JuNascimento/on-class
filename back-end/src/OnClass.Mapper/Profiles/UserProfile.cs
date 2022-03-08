using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;

namespace OnClass.Mapper.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>()
                .ReverseMap();
        }
    }
}
