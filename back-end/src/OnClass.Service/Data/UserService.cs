using AutoMapper;
using OnClass.Domain.Models;
using OnClass.DTO;
using OnClass.Helpers;
using OnClass.Infra.UnitOfWork;
using OnClass.Service.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Service.Data
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;

        public UserService(IMapper mapper, IUnitOfWork uow)
        {
            _mapper = mapper;
            _uow = uow;
        }

        public async Task<UserDTO> CreateDTO(UserDTO dto)
        {
            var salt = Environment.GetEnvironmentVariable("HASH_SALT");
            var user = _mapper.Map<User>(dto);
            user.Password = HashGenerator.HashString(dto.Password, salt);
            
            var userDB = await _uow.UserRepository.Create(user);
            
            return _mapper.Map<UserDTO>(userDB);
        }

        public Task<bool> DeleteDTO(long id)
        {
            throw new NotImplementedException();
        }

        public Task<IList<UserDTO>> GetDTO()
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> GetDTO(long id)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> UpdateDTO(long id, UserDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}
