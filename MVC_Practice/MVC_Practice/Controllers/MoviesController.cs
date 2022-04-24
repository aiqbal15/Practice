using System.Web.Mvc;
using MVC_Practice.Models;

namespace MVC_Practice.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies
        public ActionResult Random()
        {
            Movie movie = new Movie() { Name = "Shrek!" };
            return View(movie);
        }
    }
}