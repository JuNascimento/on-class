﻿using AutoMapper;
using OnClass.Mapper.Profiles;

namespace OnClass.Mapper
{
    public class AutoMapperConfig
    {
        public static IMapper RegisterAutoMapper()
        {
            var autoMapperConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<UserProfile>();
                cfg.AddProfile<DisciplinaProfile>();
            }
            );
            var mapper = autoMapperConfig.CreateMapper();
            return mapper;
        }
    }
}