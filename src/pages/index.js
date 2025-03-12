import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import { useEffect } from "react"
import Heading from "@theme/Heading"
import styles from "./index.module.css"

import { Toggle, StringFlag, NumberFlag, JsonFlag } from "@site/src/utils/flags"
import { OpenFeature } from "@openfeature/react-sdk"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const emptyJson = JSON.stringify({})

  useEffect(() => {
    OpenFeature.setContext({ user_id: "parth", internal: true })
  }, [])

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <StringFlag variableKey="site-heading" defaultValue="" />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br />
        <Toggle
          variableKey="new-maintenance-flag"
          defaultValue={false}
          comparison={true}
        >
          Maintenance Mode is ON
        </Toggle>
        <br />
        <p>
          <NumberFlag variableKey="team-number" defaultValue="0" />
        </p>
        <br />
        <p>
          <JsonFlag variableKey="team-info" defaultValue={emptyJson} />
        </p>
        <br />
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Toggle
          variableKey="show-welcome-banner"
          defaultValue={false}
          comparison={true}
        >
          <div className="banner">
            <h2>Welcome to the site</h2>
            <p>This is a welcome banner</p>
          </div>
        </Toggle>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
