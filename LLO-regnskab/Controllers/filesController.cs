using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LLO_regnskab.Controllers
{
    [Produces("application/json")]
    [Route("api/files")]
    public class filesController : Controller
    {
        //[HttpPost]
        //public IEnumerable<Posting> upload(ICollection<IFormFile> files)
        //{
        //    return Posting.Parse(files);
        //}
        [HttpPost]
        public async Task<ActionResult> uploadAsync()
        {
            try
            {
                var form = await Request.ReadFormAsync();
                var file = form.Files.First();
                var s = new System.IO.StreamReader(file.OpenReadStream(), System.Text.ASCIIEncoding.ASCII, true);
                var contents = s.ReadToEnd();
                
                //do something with your file =&gt; file.OpenReadStream()

                return Ok(Posting.Parse(contents));
            }
            catch (Exception ex)
            {
                var originalMessage = ex.Message;

                while (ex.InnerException != null)
                    ex = ex.InnerException;
                return BadRequest($"{originalMessage} | {ex.Message}");
            }
        }

    }

    public class FileList
    {
        public string Name { get; set; }
        public int Size { get; set; }
    }
}