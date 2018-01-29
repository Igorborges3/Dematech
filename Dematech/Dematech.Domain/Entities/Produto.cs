
using System.ComponentModel.DataAnnotations;

namespace Bematech.Domain.Entities
{

    public class Produto
    {
        public int IdProduto { get; set; }

        [Required(ErrorMessage = "Preencha o campo Descrição")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "Preencha o campo Valor")]
        public decimal Valor { get; set; }
        public decimal Quantidade { get; set; }
        public virtual Pedido Pedido { get; set; }
    }
}
