using Bematech.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Bematech.Domain.Interface
{
    public interface IPedidoRepository : IRepositoryBase<Pedido>
    {
        IEnumerable<Pedido> BuscarPorPeriodoDeData(DateTime dataInicial, DateTime dataFinal);
    }
}
