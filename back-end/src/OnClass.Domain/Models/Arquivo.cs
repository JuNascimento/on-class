using System;

namespace OnClass.Domain.Models
{
    public class Arquivo : BaseModel
    {
        public string? NomeOriginal { get; set; }
        public string? NomeHash { get; set; }
        public string? ExtensaoOriginal { get; set; }
        public string?  CaminhoArquivo { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
