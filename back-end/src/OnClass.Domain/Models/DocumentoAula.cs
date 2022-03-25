using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.Models
{
    public class DocumentoAula : BaseModel
    {
        public long AulaId { get; set; }
        public string NomeOriginal { get; set; }
        public string ExtensaoOriginal { get; set; }
        public string CaminhoDocumento { get; set; }
    }
}
