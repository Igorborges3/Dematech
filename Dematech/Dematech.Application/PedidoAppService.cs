using Bematech.Application.Interface;
using Bematech.Domain.Entities;
using Bematech.Domain.Interface.Services;
using Bematech.Domain.Services;

namespace Bematech.Application
{
    // Camada de regra de negocio
    public class PedidoAppService : AppServiceBase<Pedido>, IPedidoAppServiceBase
    {
        private readonly IPedidoService _pedidoService; 
        public PedidoAppService(PedidoService serviceBase) : base(serviceBase)
        {
            _pedidoService = serviceBase;
        }
    }
}
