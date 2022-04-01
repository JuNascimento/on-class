using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;


namespace OnClass.Infra.Mappings
{
    public class FrequenciaAulaMap : IEntityTypeConfiguration<FrequenciaAula>
    {
        public void Configure(EntityTypeBuilder<FrequenciaAula> builder)
        {
            builder.ToTable("FREQUENCIA_AULA");
            builder.HasKey(k => new { k.Id }).HasName("ID_FREQUENCIA_AULA");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.EstudanteId).HasColumnName("ESTUDANTE_ID");
            builder.HasOne<Estudante>().WithMany().HasForeignKey(f => f.EstudanteId);

            builder.Property(p => p.AulaId).HasColumnName("AULA_ID");
            builder.HasOne<Aula>().WithMany().HasForeignKey(f => f.AulaId);
        }
    }
}
