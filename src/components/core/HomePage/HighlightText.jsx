import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-[600] text-[36px] leading-[44px] bg-gradient-to-r from-blue-300 to-yellow-300 
    text-transparent bg-clip-text'>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText
