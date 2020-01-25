import React from "react"

function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer container">
        <p>
          Made by <strong>Eliza</strong> {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
