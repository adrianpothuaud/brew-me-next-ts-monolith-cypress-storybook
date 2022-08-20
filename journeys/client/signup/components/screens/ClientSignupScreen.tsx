import Head from "next/head"
import Link from "next/link"
import React from "react"

const ClientSignupScreen: React.FC = () => {

  return (
    <>
      <Head>
        <title>Brew Me | Sign Up as Client</title>
        <meta content="Brew Me | Find and purchase your next favorite beers from our extraordinary clients." name="description" />
        <link href="/public/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>
          You&apos;ve never been so close <span aria-label="beer" role="img">🍻</span>!
        </h1>
        <section>
          <article>
            <form></form>
          </article>
        </section>
      </main>

      <footer>
        <p>Powered with <span aria-label="heart" role="img">❤️</span> by Beer addicts!</p>
        <p>Feel free to contact us by following <Link data-cy="contact-link" href="/contact">this link</Link>, or go throught the contact page using the application&apos;s menu.</p>
      </footer>
    </>
  )
}

export default ClientSignupScreen
