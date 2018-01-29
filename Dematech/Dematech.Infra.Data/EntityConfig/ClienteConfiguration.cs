using Bematech.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace Bematech.Infra.Data.EntityConfig
{
    class ClienteConfiguration: EntityTypeConfiguration<Cliente>
    {
        public ClienteConfiguration()
        {
            HasKey(x => x.IdCliente);

            Property(x => x.IdCliente).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Nome)
                .IsRequired()
                .HasMaxLength(200);

            Property(x => x.CPF)
                .IsRequired()
                .HasMaxLength(14);
            
        }
    }
}

