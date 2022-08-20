import React from "react"

import DefaultFooter from "@components/molecules/DefaultFooter/DefaultFooter"
import PageHead from "@components/molecules/PageHead/PageHead"
import useBrewerSignupForm from "@journeys/brewer/signup/hooks/useBrewerSignupForm"

const BrewerSignupScreen: React.FC = () => {
  const formData = useBrewerSignupForm()
  console.log("Brewer signup screen", "form data", formData)

  return (
    <>
      <PageHead
        description="Brew Me | Find and purchase your next favorite beers from our extraordinary brewers."
        title="Brew Me | Sign Up as Brewer"
      />

      <main>
        <h1>
          You&apos;ve never been so close <span aria-label="beer" role="img">🍻</span>!
        </h1>
        <section>
          <article>
            <form onSubmit={formData.handleSubmit}>
              <input
                name="email"
                type="email"
              />
              <input
                name="password"
                type="password"
              />
              <button type="submit">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>

      <DefaultFooter />
    </>
  )
}

export default BrewerSignupScreen
