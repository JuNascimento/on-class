namespace OnClass.Domain.Models
{
    public class Aula : BaseModel
    {
        public long? InstrutorId { get; set; }
        public long? DisciplinaId { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

    }
}
