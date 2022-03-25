namespace OnClass.Domain.Models
{
    public class Instrutor : BaseModel
    {
        public string NomeCompleto { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Cpf { get; set; }
        public long UserId { get; set; }

    }
}
