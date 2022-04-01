using Microsoft.EntityFrameworkCore;
using OnClass.Domain.Models;
using System.Reflection;

namespace OnClass.Infra.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext()
        {
        }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        public virtual DbSet<Aula> Aulas { get; set; }
        public virtual DbSet<Disciplina> Disciplinas { get; set; }
        public virtual DbSet<DocumentoAula> DocumentoAulas { get; set; }
        public virtual DbSet<Estudante> Estudantes { get; set; }
        public virtual DbSet<EstudanteDisciplina> EstudanteDisciplinas { get; set; }
        public virtual DbSet<FrequenciaAula> FrequenciaAulas { get; set; }
        public virtual DbSet<Instrutor> Instrutores { get; set; }
        public virtual DbSet<InstrutorDisciplina> InstrutorDisciplinas { get; set; }
        public virtual DbSet<User> Users { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
