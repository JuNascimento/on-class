using System;
using System.Runtime.Serialization;

namespace OnClass.Exceptions
{
    public class DuplicatedEntryException : InvalidOperationException
    {
        public DuplicatedEntryException()
            : base("Problema ao inserir ou atualizar registro. O valor da propriedade deve ser unico no banco.")
        {
        }

        public DuplicatedEntryException(string message) : base(message)
        {
        }

        public DuplicatedEntryException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected DuplicatedEntryException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
