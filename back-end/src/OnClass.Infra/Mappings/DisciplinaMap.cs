using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class DisciplinaMap : IEntityTypeConfiguration<Disciplina>
    {
        public void Configure(EntityTypeBuilder<Disciplina> builder)
        {
            builder.ToTable("DISCIPLINA");
            builder.HasKey(k => new { k.Id }).HasName("ID_DISCIPLINA");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.Nome).HasColumnName("NOME");
        }
    }
}
