﻿using OnClass.Domain.Models;

namespace OnClass.Infra.Repositories.Interfaces
{
    public interface IInstrutorRepository : IBaseRepository<Instrutor>
    {
        public Task<Instrutor> GetInstrutorByUserId(long userId);
    }
}
