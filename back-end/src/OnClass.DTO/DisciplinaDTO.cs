using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace OnClass.DTO
{
    public class DisciplinaDTO : BaseDTO
    {
        [JsonPropertyName("id")]
        public long? Id { get; set; }

        [JsonPropertyName("disciplina")]
        public string? Nome { get; set; }
    }
}
