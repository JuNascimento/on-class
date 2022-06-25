using AutoFixture;
using AutoFixture.AutoMoq;
using OnClass.DTO;
using OnClass.API;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using OnClass.API.Controllers;
using Microsoft.AspNetCore.Mvc;
using OnClass.Service.Data;
using Moq;
using OnClass.Service.Data.Interfaces;
using OnClass.Exceptions;
using OnClass.Service.Authentication.Interfaces;

namespace OnClass.Test.Unit.Controllers.Users
{
    public class CreateUserTest
    {

        private readonly UsersController _sut;
        private readonly Mock<IAuthenticationService> mockService;

        public CreateUserTest()
        { 
            mockService = new Mock<IAuthenticationService>();
            _sut = new UsersController(mockService.Object);
        }

        [Fact]
        public async Task CriarEstudanteERetornaMensagemCorreta()
        {
            //Arrange
            var fixture = new Fixture().Customize(new AutoMoqCustomization());
            var estudante = fixture.Create<EstudanteDTO>();

            var estudanteAutenticado = fixture.Create<AuthenticatedEstudanteDTO>();

            mockService.Setup(r => r.CreateEstudante(It.IsAny<EstudanteDTO>()))
                .ReturnsAsync(value: estudanteAutenticado);

            //Act
            var response = await _sut.CreateEstudante(estudante);
            var createdResult = response.Result as CreatedResult;
            var userRecebido = createdResult.Value as AuthenticatedEstudanteDTO;

            //Assert
            Assert.NotNull(userRecebido);
        }
    }
}
