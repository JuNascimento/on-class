import { HubConnectionBuilder } from '@microsoft/signalr'

class SignalRClient {
  create(url: string) {
    try {
      const newConnection: any = new HubConnectionBuilder()
        .withUrl(url)
        .withAutomaticReconnect()
        .build()

      return newConnection
    } catch (error) {
      console.error(`[SignalR - Create] ${error}`)
    }
  }

  async send(connection: any, user: any, message: any) {
    console.log('deu ruim aqui?', connection)
    try {
      if (connection) {
        await connection.invoke('SendMessage', user, message)
      }
    } catch (error) {
      console.error(`[SignalR - Send] ${error}`)
    }
  }
}

export default SignalRClient
