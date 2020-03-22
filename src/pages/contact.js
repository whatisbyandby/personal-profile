import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

export default function AboutPage() {
  return (
    <Layout className="layout">
      <SEO title="Contact" />
      <div className="content-container">
        <h1>Contact Me</h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
