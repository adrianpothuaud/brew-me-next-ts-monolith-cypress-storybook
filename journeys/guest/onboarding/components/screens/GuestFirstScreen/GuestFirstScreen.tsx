import Head from "next/head"
import Link from "next/link"
import React from "react"

import GuestFirstScreenProps from "./GuestFirstScreen.props"

const GuestFirstScreen: React.FC = (props: GuestFirstScreenProps) => {
  console.log('Guest first screen with', props)

  return (
    <>
      <Head>
        <title>Brew Me</title>
        <meta content="Brew Me | Find and purchase your next favorite beers from our extraordinary brewers." name="description" />
        <link href="/public/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>
          Welcome <span aria-label="beer" role="img">🍻</span>!
        </h1>
        <section>
          <article>
            <h2>Using Brew-Me as a Client</h2>
            <p>bla blabla blablaaaaaaaa</p>
            <p>
              Follow{" "}
              <Link href="/client-signup">
                <a data-cy="client-signup-link">this link</a>
              </Link>{" "}
              to register for a new Client account.
            </p>
            <p>
              You already have a Client account? Follow{" "}
              <Link href="/client-login">
                <a data-cy="client-login-link">this link</a>
              </Link>{" "}
              to login right now!
            </p>
          </article>
          <article>
            <h2>Using Brew-Me as a Brewer</h2>
            <p>bla blabla blablaaaaaaaa</p>
            <p>
              Follow{" "}
              <Link href="/brewer-signup">
                <a data-cy="brewer-signup-link">this link</a>
              </Link>{" "}
              to register for a new Brewer account.
            </p>
            <p>
              You already have a Brewer account? Follow{" "}
              <Link href="/brewer-login">
                <a data-cy="brewer-login-link">this link</a>
              </Link>{" "}
              to login right now!
            </p>
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

export default GuestFirstScreen
