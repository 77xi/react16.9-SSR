import React from "react"
import serialize from "serialize-javascript"

import getAssets from "~/entry/server/util/getAssets"

interface Param {
  markup: string
  manifest: string
  initalState: object
  spanName: string
}

const Html = ({ markup, manifest, initalState, spanName }: Param) => {
  const { styles, scripts } = getAssets({ manifest, spanName })
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {styles.map((style, index) => (
          <link rel="stylesheet" href={style} key={index} />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
        <script
          id="js-initalData"
          type="text/json"
          dangerouslySetInnerHTML={{
            __html: serialize({
              spanName,
              initalState
            })
          }}
        />
        {scripts.map((script, index) => (
          <script src={script} key={index} async />
        ))}
      </body>
    </html>
  )
}

export default Html
