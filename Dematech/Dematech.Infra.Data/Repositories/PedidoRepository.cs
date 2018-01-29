using Bematech.Domain.Entities;
using Bematech.Domain.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bematech.Infra.Data.Repositories
{
    public class PedidoRepository : RepositoryBase<Pedido>, IPedidoRepository
    {
        public IEnumerable<Pedido> BuscarPorPeriodoDeData(DateTime dataInicial, DateTime dataFinal)
        {
            return Db.Pedido.Where(x => x.DataEntrega >= dataInicial &&  x.DataEntrega <= dataFinal);
        }
    }
}
