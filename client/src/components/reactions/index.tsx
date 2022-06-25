import React, { useState } from 'react'
import { ReactionsContent, Reaction, Emoji } from './index.style'

const URL_EMOJI =
  'https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807'

const Reactions: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <ReactionsContent data-testid='reactions-container'>
      <Reaction
        data-testid='reaction-emoji'
        id='first-reaction'
        onClick={() => setToggle(!toggle)}
      >
        <Emoji src={URL_EMOJI} />
      </Reaction>
      {toggle && (
        <>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src={URL_EMOJI} />
          </Reaction>
        </>
      )}
    </ReactionsContent>
  )
}

export default Reactions
