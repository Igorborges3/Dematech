using Bematech.Domain.Entities;
using Bematech.Domain.Interface;
using Bematech.Domain.Interface.Services;

namespace Bematech.Domain.Services
{
    public class ProdutoService: ServicesBase<Produto>, IProdutoService
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoService(IProdutoRepository produtoRepository) : base(produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }
    }
}
