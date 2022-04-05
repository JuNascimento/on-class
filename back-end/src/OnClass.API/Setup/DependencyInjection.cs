using OnClass.Service.Authentication;
using OnClass.Infra.Repositories;
using OnClass.Infra.Repositories.Interfaces;
using OnClass.Infra.UnitOfWork;
using OnClass.Mapper;
using OnClass.Service.Data;
using OnClass.Service.Data.Interfaces;
using OnClass.Service.Authentication.Interfaces;

namespace OnClass.API.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IAulaRepository, AulaRepository>();

            services.AddScoped<IDisciplinaRepository, DisciplinaRepository>();

            services.AddScoped<IDocumentoAulaRepository, DocumentoAulaRepository>();

            services.AddScoped<IEstudanteRepository, EstudanteRepository>();

            services.AddScoped<IEstudanteDisciplinaRepository, EstudanteDisciplinaRepository>();

            services.AddScoped<IFrequenciaAulaRepository, FrequenciaAulaRepository>();

            services.AddScoped<IInstrutorRepository, InstrutorRepository>();

            services.AddScoped<IInstrutorDisciplinaRepository, InstrutorDisciplinaRepository>();

            services.AddScoped<IUserRepository, UserRepository>();
            
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            services.AddTransient<IUnitOfWork, UnitOfWork>();

            services.AddSingleton(AutoMapperConfig.RegisterAutoMapper());
        }
    }
}
