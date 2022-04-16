using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnClass.Domain.SignalRModels
{
    public class ChatHubProperties
    {
        public string GroupName { get; set; }
        public string UserName { get; set; }
        public string Message { get; set; }
    }

    public class ChatMessage
    {
        public string UserName { get; set; }
        public string Message { get; set; }
    }
}
