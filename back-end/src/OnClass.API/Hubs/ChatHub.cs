using Microsoft.AspNetCore.SignalR;
using OnClass.Domain.SignalRModels;

namespace OnClass.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
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

        public async Task SendMessageToGroup(ChatHubProperties properties)
        {
            await Clients.Group(properties.GroupName)
                .SendAsync("ReceiveMessageFromServer", new ChatMessage { UserName = properties.UserName, Message = properties.Message });
        }
    }

}
