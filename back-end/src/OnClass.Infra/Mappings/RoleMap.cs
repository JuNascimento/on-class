using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class RoleMap : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("ROLE");
            builder.HasKey(k => new { k.Id }).HasName("ID");
            builder.Property(p => p.Id).HasColumnName("ID");

            builder.Property(p => p.RoleName).HasColumnName("ROLE_NAME");
        }
    }
}
