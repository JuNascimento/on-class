using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class EstudanteMap : IEntityTypeConfiguration<Estudante>
    {
        public void Configure(EntityTypeBuilder<Estudante> builder)
        {
            builder.ToTable("ESTUDANTE");
            builder.HasKey(k => new { k.Id }).HasName("ID_ESTUDANTE");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.NomeCompleto).HasColumnName("NOME_COMPLETO");
            builder.Property(p => p.DataNascimento).HasColumnName("DATA_NASCIMENTO");
            builder.Property(p => p.NomeMae).HasColumnName("NOME_MAE");

            builder.Property(p => p.UserId).HasColumnName("USER_ID");
            builder.HasOne<User>().WithMany().HasForeignKey(f => f.UserId);
        }
    }
}
