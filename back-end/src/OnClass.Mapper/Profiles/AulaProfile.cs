using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
namespace OnClass.Mapper.Profiles
{
    public class AulaProfile : Profile
    {
        public AulaProfile()
        {
            CreateMap<Aula, AulaDTO>()
                .ForPath(dst => dst.InstrutorDTO.Id,
                    map => map.MapFrom(src => src.InstrutorId))
                .ForPath(dst => dst.DisciplinaDTO.Id,
                    map => map.MapFrom(src => src.DisciplinaId))
                .ReverseMap();

        }
    }
}
