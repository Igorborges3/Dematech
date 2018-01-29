using Bematech.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace Bematech.Infra.Data.EntityConfig
{
    class PedidoConfiguration : EntityTypeConfiguration<Pedido>
    {
        public PedidoConfiguration()
        {
            HasKey(x => x.IdPedido);
            HasRequired(x => x.Cliente);
         
         }
    }
}
