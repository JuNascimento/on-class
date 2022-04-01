using Microsoft.AspNetCore.SignalR;
using System.Text.Json;
using System.Threading.Channels;

namespace OnClass.API.Hubs
{
    public class VideoHub : Hub
    {
        public async Task SendStream(object stream)
        {
            await Clients.All.SendAsync("ReceiveMessage", stream);
            
        }

        public async Task UploadStreamBytes(string stream)
        {
            Console.WriteLine($"UploadStreamBytes size: {stream.Length}");
            await Clients.All.SendAsync("ReceiveStream", stream);

        }
        public async Task SendStreamDataToGroup(VideoHubProperties properties, IAsyncEnumerable<string> data)
        {
            await Clients.Group(properties.GroupName).SendAsync("ReceiveDataFromServer", new { Data = data });
        }

        public async Task CreateGroup(string groupName, string user)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Send", $"{user} has joined the group {groupName}.");
        }

        public async Task RemoveFromGroup(string groupName, string user)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);

            await Clients.Group(groupName).SendAsync("Send", $"{user} has left the group {groupName}.");
        }

        public async Task SendDataToGroup(VideoHubProperties properties, object data)
        {
            await Clients.Group(properties.GroupName).SendAsync("ReceiveDataFromServer", new { Data = data });
        }

    }

    public class VideoHubProperties
    {
        public string GroupName { get; set; }
        public string UserName { get; set; }
    }
        
}
