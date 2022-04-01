using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class EstudanteDisciplinaMap : IEntityTypeConfiguration<EstudanteDisciplina>
    {
        public void Configure(EntityTypeBuilder<EstudanteDisciplina> builder)
        {
            builder.ToTable("ESTUDANTE_DISCIPLINA");
            builder.HasKey(k => new { k.Id }).HasName("ID_ESTUDANTE_DISCIPLINA");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.EstudanteId).HasColumnName("ESTUDANTE_ID");
            builder.HasOne<Estudante>().WithMany().HasForeignKey(f => f.EstudanteId);

            builder.Property(p => p.DisciplinaId).HasColumnName("DISCIPLINA_ID");
            builder.HasOne<Disciplina>().WithMany().HasForeignKey(f => f.DisciplinaId);
        }
    }
}
