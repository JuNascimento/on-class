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

            CreateMap<Estudante, EstudanteDTO>()
                .ReverseMap();

            CreateMap<Estudante, EstudanteBasicDTO>()
                .ReverseMap();

            CreateMap<User, EstudanteDTO>()
                .ReverseMap();
            
            CreateMap<Instrutor, InstrutorDTO>()
                .ReverseMap();

            CreateMap<Instrutor, InstrutorBasicDTO>()
                .ReverseMap();

            CreateMap<User, InstrutorDTO>()
                .ReverseMap();
        }
    }
}
