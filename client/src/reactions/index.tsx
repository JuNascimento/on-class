import React, { useState } from 'react'
import { Reactions, Reaction, Emoji } from './index.style'

const ReactionsContainer: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Reactions data-testid='reactions-container'>
      <Reaction
        data-testid='reaction-emoji'
        id='first-reaction'
        onClick={() => setToggle(!toggle)}
      >
        <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
      </Reaction>
      {toggle && (
        <>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
          <Reaction data-testid='reaction-emoji'>
            <Emoji src='https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807' />
          </Reaction>
        </>
      )}
    </Reactions>
  )
}

export default ReactionsContainer
