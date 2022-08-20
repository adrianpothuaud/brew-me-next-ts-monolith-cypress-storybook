import Link from "next/link"
import React from "react"

const DefaultFooter: React.FC = () => {
  return (
    <footer>
      <p>Powered with <span aria-label="heart" role="img">❤️</span> by Beer addicts!</p>
      <p>Feel free to contact us by following <Link data-cy="contact-link" href="/pages/contact">this link</Link>, or go throught the contact page using the application&apos;s menu.</p>
    </footer>
  )
}

export default DefaultFooter
