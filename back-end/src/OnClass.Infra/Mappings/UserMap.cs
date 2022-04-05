using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnClass.Domain.Models;

namespace OnClass.Infra.Mappings
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("USER");
            builder.HasKey(k => new { k.Id }).HasName("ID");
            builder.Property(p => p.Id).HasColumnName("ID");
            
            builder.Property(p => p.UserName).HasColumnName("USER_NAME");
            builder.Property(p => p.Password).HasColumnName("PASSWORD");
            builder.Property(p => p.Salt).HasColumnName("SALT");

        }
    }
}
