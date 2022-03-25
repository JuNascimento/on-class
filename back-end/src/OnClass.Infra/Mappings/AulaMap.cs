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

            builder.Property(p => p.InstrutorDisciplinaId).HasColumnName("INSTRUTOR_DISCIPLINA_ID");
            builder.HasOne<Instrutor>().WithMany().HasForeignKey(f => f.InstrutorDisciplinaId);
        }
    }
}
