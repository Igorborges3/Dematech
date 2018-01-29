using Bematech.Application.Interface;
using Bematech.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bematech.Domain.Interface.Services;

namespace Bematech.Application
{
    // Camada de regra de negocio
    public class ClienteAppService : AppServiceBase<Cliente>, IClienteAppServiceBase
    {
        private readonly IClienteService clienteService;

        public ClienteAppService(IClienteService serviceBase) : base(serviceBase)
        {
            clienteService = serviceBase;
        }
    }
}
