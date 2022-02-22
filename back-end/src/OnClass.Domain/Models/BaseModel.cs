using System.Runtime.Serialization;

namespace OnClass.Domain.Models
{
    [DataContract]
    public class BaseModel
    {
        public long Id { get; set; }
    }
}
