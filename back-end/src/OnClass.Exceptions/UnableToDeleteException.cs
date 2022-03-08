using System;
using System.Runtime.Serialization;

namespace OnClass.Exceptions
{
    public class UnableToDeleteException : InvalidOperationException
    {
        public UnableToDeleteException()
            : base("Problema ao deletar registro no banco.")
        {
        }

        public UnableToDeleteException(string message) : base(message)
        {
        }

        public UnableToDeleteException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UnableToDeleteException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
