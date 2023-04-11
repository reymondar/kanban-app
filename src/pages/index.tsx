import * as React from "react"
import Display from "../components/BoardPage"
import { HeadFC , useStaticQuery , graphql } from "gatsby"


export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

const {title} = data.site.siteMetadata;

  return <title>{title}</title>
}

const IndexPage = () => {
  return (
    <>
    <React.StrictMode>
      <Display />
      </React.StrictMode>
    </>
  )
}


export default IndexPage

