using Bematech.Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace Bematech.Infra.Data.EntityConfig
{
    class ProdutoConfiguration : EntityTypeConfiguration<Produto>
    {
        public ProdutoConfiguration()
        {
            HasKey(x => x.IdProduto);

            Property(x => x.Descricao).IsRequired();

            Property(x => x.Valor).IsRequired();
        
        }
    }
}
