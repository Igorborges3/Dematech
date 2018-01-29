using Bematech.Application.Interface;
using Bematech.Domain.Entities;
using Bematech.MVC.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Bematech.MVC.Controllers
{
    public class ProdutoController : Controller
    {

        private readonly IProdutoAppServiceBase _produtoApp;

        public ProdutoController(IProdutoAppServiceBase produtoApp)
        {
            _produtoApp = produtoApp;
        }

        // GET: Produto
        public ActionResult Index()
        {
            var produtoViewModel = from model in _produtoApp.GetAll()
                                   select new ProdutoViewModel()
                                   {
                                       Descricao = model.Descricao,
                                       Valor = model.Valor
                                   };
            return View(produtoViewModel);
        }

        // GET: Produto/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Produto/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Produto/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ProdutoViewModel produtoViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Produto produtoDomain = new Produto()
                    {
                        Descricao = produtoViewModel.Descricao,
                        Valor = produtoViewModel.Valor
                    };
                    _produtoApp.Add(produtoDomain);
                    return RedirectToAction("Index");
                }
                else return View(produtoViewModel);

            }
            catch
            {
                return View();
            }
        }

        // GET: Produto/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Produto/Edit/5
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

        // GET: Produto/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Produto/Delete/5
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
        public ActionResult GetProduto(string idProduto)
        {
  
            if (!String.IsNullOrEmpty(idProduto))
                return Json(JsonConvert.SerializeObject(_produtoApp.GetById(Convert.ToInt32(idProduto))), JsonRequestBehavior.AllowGet);
            

                return null;
        }



    }
}
