using SignalRSwaggerGen.Attributes;

namespace OnClass.API.VideoHub
{
    [SignalRHub]
    public interface IVideoChat
    {
        Task ReceiveMessage(string user, string message);
    }
}
