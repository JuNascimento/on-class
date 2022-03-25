using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class InstrutorMap : IEntityTypeConfiguration<Instrutor>
    {
        public void Configure(EntityTypeBuilder<Instrutor> builder)
        {
            builder.ToTable("INSTRUTOR");
            builder.HasKey(k => new { k.Id }).HasName("ID_INSTRUTOR");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.NomeCompleto).HasColumnName("NOME_COMPLETO");
            builder.Property(p => p.DataNascimento).HasColumnName("DATA_NASCIMENTO");
            builder.Property(p => p.Cpf).HasColumnName("CPF");

            builder.Property(p => p.UserId).HasColumnName("USER_ID");
            builder.HasOne<User>().WithMany().HasForeignKey(f => f.UserId);
        }
    }
}
