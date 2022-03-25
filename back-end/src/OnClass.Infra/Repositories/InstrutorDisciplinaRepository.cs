﻿using OnClass.Domain.Models;
using OnClass.Infra.Context;
using OnClass.Infra.Repositories.Interfaces;

namespace OnClass.Infra.Repositories
{
    public class InstrutorDisciplinaRepository : BaseRepository<InstrutorDisciplina>, IInstrutorDisciplinaRepository
    {
        public InstrutorDisciplinaRepository(ApplicationContext context) : base(context)
        {
        }
        public InstrutorDisciplinaRepository()
        {

        }
    }
}
