import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Toggle from "../../plugins/docusaurus-plugin/src/theme/MDXComponents/Toggle";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import StringFlag from "../../plugins/docusaurus-plugin/src/theme/MDXComponents/StringFlag";
import NumberFlag from "../../plugins/docusaurus-plugin/src/theme/MDXComponents/NumberFlag";
import JsonFlag from "../../plugins/docusaurus-plugin/src/theme/MDXComponents/JsonFlag";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const emptyJson = JSON.stringify({});
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Toggle
            variableKey="maintenance-mode"
            defaultValue={false}
            comparison={true}
          >
            This flag is turned on
          </Toggle>
          <StringFlag variableKey="string-flag" defaultValue="" />
          <NumberFlag variableKey="number-flag" defaultValue="0" />
          <JsonFlag variableKey="json-flag" defaultValue={emptyJson} />
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
