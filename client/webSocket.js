const WebSocket = require('ws')

var socketServer = new WebSocket.Server({ port: 8082 })

socketServer.on('connection', ws => {
  console.log('novo cliente')

  ws.on('message', data => {
    console.log(`tão me enviando o seguinte --> ${data}`)

    const imagemDecode =
      'data:image/jpeg;base64,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'
    ws.send(imagemDecode)
  })

  ws.on('close', () => {
    console.log('fim de conexao')
  })
})
