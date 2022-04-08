namespace OnClass.Domain.Models
{
    public class DocumentoAula : BaseModel
    {
        public long? AulaId { get; set; }
        public string? NomeOriginal { get; set; }
        public string? ExtensaoOriginal { get; set; }
        public string? CaminhoDocumento { get; set; }
        public DateTime DataCriacao { get; set; }
        public string? NomeHash { get; set; }
    }
}
