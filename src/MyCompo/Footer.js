import React from 'react'
import './footer.css'

let footerStyle = {

  bottom: "-10px",
    width: "100%",
    position: "absolute",
    /* right: 0; */
    background: "black",
    color: "#ffffff",
  
  
}

export const Footer = () => {
  return (

    <footer className='text-center py-3' style = {footerStyle}>
      <p>footer is working</p>
    </footer>
    
  )
}

