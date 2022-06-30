using OnClass.Validations;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OnClass.DTO
{
    public class AulaDTO
    {

        [JsonPropertyName("id")]
        public long? Id { get; set; }

        [JsonPropertyName("uuid")]
        public string? Uuid { get; set; }

        [Required]
        [JsonPropertyName("instrutor")]
        public InstrutorBasicDTO InstrutorDTO { get; set; }
        
        [Required]
        [JsonPropertyName("disciplina")]
        public DisciplinaDTO DisciplinaDTO { get; set; }
        
        [Required]
        [JsonPropertyName("data_inicio")]
        [DataInicioAula]
        public DateTime DataInicio { get; set; }
        
        [JsonPropertyName("data_fim")]
        public DateTime DataFim { get; set; }  
    }

    public class BuscarAulaDTO
    {
        [JsonPropertyName("ids_instrutores")]
        public List<long?> IdInstrutores { get; set; }

        [JsonPropertyName("ids_disciplinas")]
        public List<long?> IdDisciplinas { get; set; }

        [JsonPropertyName("data_inicio")]
        public DateTime DataInicio { get; set; }
        
        [JsonPropertyName("data_fim")]
        public DateTime DataFim { get; set; }
    }

    public class AulaEstudanteDTO
    {
        [Required]
        [JsonPropertyName("id_estudante")]
        public long? EstudanteId { get; set; }

        [Required]
        [JsonPropertyName("id_aula")]
        public long? AulaId { get; set; }
    }
}
