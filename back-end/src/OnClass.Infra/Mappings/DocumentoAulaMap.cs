using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class DocumentoAulaMap : IEntityTypeConfiguration<DocumentoAula>
    {
        public void Configure(EntityTypeBuilder<DocumentoAula> builder)
        {
            builder.ToTable("DOCUMENTO_AULA");
            builder.HasKey(k => new { k.Id }).HasName("ID_DOCUMENTO_AULA");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.NomeOriginal).HasColumnName("NOME_ORGINAL");
            builder.Property(p => p.ExtensaoOriginal).HasColumnName("EXTENSAO_ORIGINAL");
            builder.Property(p => p.CaminhoDocumento).HasColumnName("CAMINHO_DOCUMENTO");

            builder.Property(p => p.AulaId).HasColumnName("AULA_ID");
            builder.HasOne<Aula>().WithMany().HasForeignKey(f => f.AulaId);
        }
    }
}
