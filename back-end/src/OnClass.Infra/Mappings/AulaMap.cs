using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class AulaMap : IEntityTypeConfiguration<Aula>
    {
        public void Configure(EntityTypeBuilder<Aula> builder)
        {
            builder.ToTable("AULA");
            builder.HasKey(k => new { k.Id }).HasName("ID_AULA");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.DataInicio).HasColumnName("DATA_INICIO");
            builder.Property(p => p.DataFim).HasColumnName("DATA_FIM");
            builder.Property(p => p.Uuid).HasColumnName("UUID");

            builder.HasOne<Instrutor>().WithMany().HasForeignKey(f => f.InstrutorId);
            builder.Property(p => p.InstrutorId).HasColumnName("INSTRUTOR_ID");

            builder.HasOne<Disciplina>().WithMany().HasForeignKey(f => f.DisciplinaId);
            builder.Property(p => p.DisciplinaId).HasColumnName("DISCIPLINA_ID");
        }
    }
}
