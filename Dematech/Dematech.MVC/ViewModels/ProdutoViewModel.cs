using System.ComponentModel.DataAnnotations;

namespace Bematech.MVC.ViewModels
{
    public class ProdutoViewModel
    {
        public int IdProduto { get; set; }
        [Display(Name = "Descrição: ")]
        public string Descricao { get; set; }

        [Display(Name = "Valor: ")]
        public decimal Valor { get; set; }
    }
}