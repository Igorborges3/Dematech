using Bematech.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace Bematech.MVC.ViewModels
{
    public class PedidoViewModel
    {
        
        public int IdPedido { get; set; }
        [Display(Name = "Cliente: ")]
        public int IdCliente { get; set; }
        [Display(Name = "Produto: ")]
        public int IdProduto { get; set; }

        [Required(ErrorMessage = "Preencha o campo Quantidade")]
        [Range(typeof(decimal),"0","999,99")]
        [Display(Name = "Quantidade: ")]
        public decimal Quantidade { get; set; }

        [Required(ErrorMessage = "Preencha o campo Data de Entrega")]
        [Display(Name = "Data de Entrega: ")]
        public DateTime DataEntrega { get; set; }

        [Required(ErrorMessage = "Preencha o campo Quantidade")]
        [Display(Name = "Valor Total: ")]
        public decimal ValorTotal { get; set; }
        public virtual Cliente Cliente { get; set; }
        public IEnumerable<Produto> Produto { get; set; }   
    }
}