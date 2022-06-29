import React, { useState } from 'react'
import { ModalContainer } from '../modal'
import NotImplemented from '../notImplemented'
import { ReactionsContent, Reaction, Emoji } from './index.style'

const URL_EMOJIS = [
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807',
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Emoji_Icon.png?11214052019865124406=&epik=dj0yJnU9T3llZk53ZzQ5emdRcU9wNXZmZEhDNlFBX3p3LVFRdEMmcD0wJm49TU40VVhYNWJuUHFpd19wSGt0QVlrZyZ0PUFBQUFBR0s3dnZF',
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Growing_Pink_Heart_Emoji.png?2396656417244989825=&epik=dj0yJnU9bEtDUGcxQ0ZpNlhERmtBVHFMZV9sbEg2U1hpNWQ2cHEmcD0wJm49OU51QTlTVm9Qa2Z0YWFaZk5rT254QSZ0PUFBQUFBR0s3eERJ',
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Tongue_Out_Emoji_with_Winking_Eye.png?9898922749706957214=&epik=dj0yJnU9VFhpU2xRTFgwNFZ5TjlXcDZtOGdmQ3p3UVM4OWxRVjMmcD0wJm49blpkallxa3k2akNwT3RKTTRKVjFlQSZ0PUFBQUFBR0s3eEZN',
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji.png?9898922749706957214=&epik=dj0yJnU9Z2JnZmNObWZlQWc0Y0FfaS14SWNxS2JnS1p5M3AzWWwmcD0wJm49dUJVT2VGaUZIVlBrcjlWT1dwWVZ2USZ0PUFBQUFBR0s3eEZv',
  'https://cdn.shopify.com/s/files/1/1061/1924/products/7_1024x1024.png?v=1571606116&epik=dj0yJnU9a1NTcHZaOGU0SjhCd3V3VTl1U05ZUWZoTnZMNUJUb1omcD0wJm49T3JrNUQ5QnVDZ3RzQzZ5cmZRM0hpZyZ0PUFBQUFBR0s3eEdB',
  'https://cdn.shopify.com/s/files/1/0185/5092/products/objects-0183_large.png?v=1369543593&epik=dj0yJnU9bjIzRzhXNFVEZEF2c2VZZjcwa1VSS3NvcS0xdnRiWHMmcD0wJm49dnNxQk9VLUVfaUFfdUlhUFpLaVFLdyZ0PUFBQUFBR0s3eFdz',
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_Face_Emoji.png?9898922749706957214=&epik=dj0yJnU9bjEzTklON3FNazJWOFBMZmNKN1l3SmsyMDFfcW5iY2wmcD0wJm49YUFDQWZ4ZXlCVmdlYk9uc0VfTTBMZyZ0PUFBQUFBR0s3eG9v',
]

const Reactions: React.FC = () => {
  const [notImplementedError, setNotImplementedError] = useState(false)

  return (
    <ReactionsContent data-testid='reactions-container'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((key, value) => {
        return (
          <Reaction
            key={`reaction-${key}`}
            data-testid='reaction-emoji'
            id='first-reaction'
            onClick={() => setNotImplementedError(true)}
          >
            <Emoji src={URL_EMOJIS[value]} />
          </Reaction>
        )
      })}
      {notImplementedError && (
        <ModalContainer setcloseModal={setNotImplementedError}>
          <NotImplemented />
        </ModalContainer>
      )}
    </ReactionsContent>
  )
}

export default Reactions
