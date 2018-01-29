using Bematech.Domain.Entities;
using Bematech.Domain.Interface.Services;
using System;
using System.Collections.Generic;
using Bematech.Domain.Interface;

namespace Bematech.Domain.Services
{
    public class PedidoService : ServicesBase<Pedido>, IPedidoService
    {
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoService(IPedidoRepository pedidoRepository) : base(pedidoRepository)
        {
            _pedidoRepository = pedidoRepository;
        }

        public IEnumerable<Pedido> BuscarPorPeriodoDeData(DateTime dataInicial, DateTime dataFinal)
        {
             return  _pedidoRepository.BuscarPorPeriodoDeData(dataInicial, dataFinal);
        }
    }
}
