using System;
using System.Collections.Generic;

namespace Bematech.Domain.Entities
{
    public class Pedido
    { 
        public Pedido()
        {
            Produto = new List<Produto>();
        }
        public int IdPedido { get; set; }
       
        public DateTime DataEntrega { get; set; }
        public decimal ValorTotal { get; set; }
        
        public virtual Cliente Cliente { get; set; }
        public ICollection<Produto> Produto { get; set; }
    }
}
