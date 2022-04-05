using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;

namespace OnClass.Mapper.Profiles
{
    public class DisciplinaProfile : Profile
    {
        public DisciplinaProfile()
        {
            CreateMap<Disciplina, DisciplinaDTO>()
                .ReverseMap();
        }
    }
}
