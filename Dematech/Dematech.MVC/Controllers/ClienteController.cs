
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bematech.MVC.ViewModels;
using Bematech.Application.Interface;
using Bematech.Domain.Entities;

namespace Bematech.MVC.Controllers
{
    public class ClienteController : Controller
    {
        private readonly IClienteAppServiceBase _clienteApp;

        public ClienteController(IClienteAppServiceBase clienteApp)
        {
            _clienteApp = clienteApp;
        }

        // GET: Cliente
        public ActionResult Index()
        {
            var clienteViewModel = from x in _clienteApp.GetAll()
                                   select new ClienteViewModel()
                                   {
                                       CPF = x.CPF,
                                       Nome = x.Nome
                                   };


            return View(clienteViewModel);

        }

        // GET: Cliente/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Cliente/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Cliente/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ClienteViewModel clienteViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Cliente clienteDomain = new Cliente()
                    {
                        CPF = clienteViewModel.CPF,
                        Nome = clienteViewModel.Nome,
                    };
                    _clienteApp.Add(clienteDomain);
                    return RedirectToAction("Index");
                }
                else return View(clienteViewModel);

            }
            catch
            {
                return View();
            }
        }

        // GET: Cliente/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Cliente/Edit/5
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

        // GET: Cliente/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Cliente/Delete/5
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
    }
}
