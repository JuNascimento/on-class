namespace OnClass.Domain.Models
{
    public class Aula : BaseModel
    {
        public long InstrutorDisciplinaId { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

    }
}
