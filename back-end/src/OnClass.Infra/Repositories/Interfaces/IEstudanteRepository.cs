﻿using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IEstudanteRepository : IBaseRepository<Estudante>
    {
        public Task<Estudante> GetEstudanteByUserId(long? userId);
    }
}
