import { HubConnectionBuilder } from '@microsoft/signalr'

class SignalRClient {
  create(url: string) {
    try {
      const newConnection: any = new HubConnectionBuilder()
        .withUrl(url)
        .withAutomaticReconnect()
        .build()

      console.log(`[SignalR - Create] Deu certo para criar`, newConnection)
      return newConnection
    } catch (error) {
      console.error(`[SignalR - Create] ${error}`)
    }
  }

  receive(connection: any, latestChat: any, callback: any) {
    connection
      .start()
      .then((result: any) => {
        connection.on('Receive', (message: string, message2: string) => {
          const updatedChat: any = [...latestChat.current]
          updatedChat.push(message)

          callback(updatedChat)
        })
        console.log(`[SignalR - Create] Deu certo para receber`)
      })
      .catch((error: any) => console.error(`[SignalR - Receive] ${error}`))
  }

  async send(connection: any, user: any, message: any) {
    console.log('deu ruim aqui?', connection)
    if (connection.connectionId) {
      try {
        await connection.send('Send', user, message)
      } catch (error) {
        console.error(`[SignalR - Send] ${error}`)
      }
    } else {
      console.error('[SignalR - Send] No connection to server yet')
    }
  }
}

export default SignalRClient
