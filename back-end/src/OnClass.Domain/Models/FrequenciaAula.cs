namespace OnClass.Domain.Models
{
    public class FrequenciaAula : BaseModel
    {
        public long? AulaId { get; set; }
        public long? EstudanteId { get; set; }
    }
}
