using Microsoft.AspNetCore.SignalR;

namespace OnClass.API.VideoHub
{
    public class VideoChat : Hub<IVideoChat>
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.ReceiveMessage(user, message);
        }
    }
}
