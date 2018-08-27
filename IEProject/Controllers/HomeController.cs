using IEProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace IEProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            SQLConnection sqlConn = new SQLConnection();
            ViewBag.list = sqlConn.getResultFromSQL("");

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            SQLConnection sqlConn = new SQLConnection();
            DataTable data = sqlConn.getQuestions();
            var questions = ChallengeHelper.generateDataFromDataTable(data);

            return View(questions);
        }

        public ActionResult Challenge()
        {
            ViewBag.Message = "Challenge page";

            SQLConnection sqlConn = new SQLConnection();
            DataTable data = sqlConn.getQuestions();


            return View(ChallengeHelper.generateDataFromDataTable(data));
        }
    }
}