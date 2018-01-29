using Bematech.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Bematech.Domain.Interface.Services
{
    public interface IPedidoService: IServiceBase<Pedido>
    {
        IEnumerable<Pedido> BuscarPorPeriodoDeData(DateTime dataInicial, DateTime dataFinal);
    }
}
