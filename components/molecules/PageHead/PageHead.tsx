import Head from "next/head"
import React from "react"

import PageHeadProps from "./PageHead.props"

const PageHead: React.FC<PageHeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta content={props.description} name="description" />
      <link href="/public/favicon.ico" rel="icon" />
    </Head>
  )
}

export default PageHead
