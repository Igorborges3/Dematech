using Bematech.Domain.Entities;
using Bematech.Domain.Interface;
using Bematech.Domain.Interface.Services;
using Bematech.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bematech.Domain.Services
{
    public class ClienteService : ServicesBase<Cliente>, IClienteService
    {
        private readonly IClienteRepository _clienteRepository;

        public ClienteService(IClienteRepository clienteRepository) : base(clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }
    }
}
