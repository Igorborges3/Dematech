using System.ComponentModel.DataAnnotations;

namespace Bematech.MVC.ViewModels
{
    public class ClienteViewModel
    {
        [Display(Name ="Cliente: ")]
        public int IdCliente { get; set; }
        [Required(ErrorMessage = "Preencha o campo Nome")]
        [Display(Name = "Nome: ")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Preencha o campo CPF")]
        [Display(Name = "CPF: ")]
        public string CPF { get; set; }
    }
}