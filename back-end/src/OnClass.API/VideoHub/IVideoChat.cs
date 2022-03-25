namespace OnClass.API.VideoHub
{
    public interface IVideoChat
    {
        Task ReceiveMessage(string user, string message);
    }
}
