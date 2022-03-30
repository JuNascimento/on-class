using Microsoft.AspNetCore.SignalR;
using System.Threading.Channels;

namespace OnClass.API.Hubs
{
    public class VideoHub : Hub
    {
        public async Task SendStream(object stream)
        {
            await Clients.All.SendAsync("ReceiveMessage", stream);
        }

        public async Task UploadStream(ChannelReader<object> stream)
        {
            while (await stream.WaitToReadAsync())
            {
                while (stream.TryRead(out var item))
                {
                    // do something with the stream item
                    Console.WriteLine(item);
                }
            }
        }
    }
}
