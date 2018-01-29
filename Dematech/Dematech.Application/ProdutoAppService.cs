using Bematech.Application.Interface;
using Bematech.Domain.Interface.Services;

namespace Bematech.Application
{
    // Camada de regra de negocio
    public class ProdutoAppService : AppServiceBase<Domain.Entities.Produto>, IProdutoAppServiceBase
    {
        private readonly IProdutoService _produtoService;

        public ProdutoAppService(IProdutoService serviceBase) : base(serviceBase)
        {
            _produtoService = serviceBase;
        }
    }
}
