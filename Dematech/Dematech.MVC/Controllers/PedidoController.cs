using Bematech.Application.Interface;
using Bematech.Domain.Entities;
using Bematech.Domain.Interface;
using Bematech.MVC.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Web;
using System.Web.Script.Serialization;
using Newtonsoft.Json;

namespace Bematech.MVC.Controllers
{
    public class PedidoController : Controller
    {
        private readonly IPedidoAppServiceBase _pedidoApp;
        private readonly IProdutoAppServiceBase _produtoApp;
        private readonly IClienteAppServiceBase _clienteApp;


        public PedidoController(IPedidoAppServiceBase pedidoApp, IClienteAppServiceBase clienteApp, IProdutoAppServiceBase produtoApp)
        {
            _pedidoApp = pedidoApp;
            _clienteApp = clienteApp;
            _produtoApp = produtoApp;
        }

        // GET: Pedido
        public ActionResult Index()
        {

            var pedidoViewModel = from model in _pedidoApp.GetAll()

                                  select new PedidoViewModel()
                                  {
                                      Cliente = model.Cliente,
                                      Produto = model.Produto,
                                      DataEntrega = model.DataEntrega,
                                      ValorTotal = model.ValorTotal
                                  };

            return View(pedidoViewModel);
        }

        // GET: Pedido/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Pedido/Create
        public ActionResult Create()
        {  
            ViewBag.Clientes = new SelectList(_clienteApp.GetAll(), "IdCliente", "Nome", "Nome");
            ViewBag.Produtos = new SelectList(_produtoApp.GetAll(), "IdProduto", "Descricao", "Descricao");
            return View(new PedidoViewModel());
        }

        // POST: Pedido/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(PedidoViewModel pedidoViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Pedido pedidoDomain = new Pedido()
                    {
                        Cliente = pedidoViewModel.Cliente,
                        Produto = (ICollection<Produto>)pedidoViewModel.Produto,
                        DataEntrega = pedidoViewModel.DataEntrega,
                        ValorTotal = pedidoViewModel.ValorTotal
                    };
                    _pedidoApp.Add(pedidoDomain);
                    return RedirectToAction("Index");
                }
                else return View(pedidoViewModel);

            }
            catch
            {
                return View();
            }
        }

        // GET: Pedido/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Pedido/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Pedido/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Pedido/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        [HttpPost]
        public ActionResult Salvar(List<string> myrows)
        {
         
            //_pedidoApp.Add(pedido);
            return View("Index");
        }

      
    }
}
