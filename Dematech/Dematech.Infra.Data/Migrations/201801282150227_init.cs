namespace Bematech.Infra.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cliente",
                c => new
                    {
                        IdCliente = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false, maxLength: 200, unicode: false),
                        CPF = c.String(nullable: false, maxLength: 14, unicode: false),
                    })
                .PrimaryKey(t => t.IdCliente);
            
            CreateTable(
                "dbo.Pedido",
                c => new
                    {
                        IdPedido = c.Int(nullable: false, identity: true),
                        Quantidade = c.Decimal(nullable: false, precision: 18, scale: 2),
                        DataEntrega = c.DateTime(nullable: false),
                        ValorTotal = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Cliente_IdCliente = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdPedido)
                .ForeignKey("dbo.Cliente", t => t.Cliente_IdCliente)
                .Index(t => t.Cliente_IdCliente);
            
            CreateTable(
                "dbo.Produto",
                c => new
                    {
                        IdProduto = c.Int(nullable: false, identity: true),
                        Descricao = c.String(nullable: false, maxLength: 100, unicode: false),
                        Valor = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Pedido_IdPedido = c.Int(),
                    })
                .PrimaryKey(t => t.IdProduto)
                .ForeignKey("dbo.Pedido", t => t.Pedido_IdPedido)
                .Index(t => t.Pedido_IdPedido);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Produto", "Pedido_IdPedido", "dbo.Pedido");
            DropForeignKey("dbo.Pedido", "Cliente_IdCliente", "dbo.Cliente");
            DropIndex("dbo.Produto", new[] { "Pedido_IdPedido" });
            DropIndex("dbo.Pedido", new[] { "Cliente_IdCliente" });
            DropTable("dbo.Produto");
            DropTable("dbo.Pedido");
            DropTable("dbo.Cliente");
        }
    }
}
