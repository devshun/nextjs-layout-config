# nextjs-layout-config

This is a library for managing page layouts in Next.js applications in one place.

<br />

## Installation

<br />

Using npm:

```
npm install nextjs-layout-config
```

Using yarn:

```
yarn add nextjs-layout-config
```

## Usage

<br />

nextjs v13

```
"use client"

import './globals.css'
import {LayoutConfig, useLayoutConfig} from "nextjs-layout-config"

const layoutConfig: LayoutConfig = [
  {
    path: "/dashboard",
    layout: (page) => <DashBoardLayout>{page}</DashBoardLayout>,
    children: []
  },
  {
    path: "/posts",
    layout: (page) => <PostsLayout>{page}</PostsLayout>,
    children: [{
      path: "/:id",
      layout: (page) => <PostDetailsLayout>{page}</PostDetailsLayout>
    }]
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layout = useLayoutConfig(layoutConfig)
  return (
    <html lang="en">
      <body>{layout(children)}</body>
    </html>
  )
}
```

**※ Currently, server-side rendering is not supported, so it is necessary to add the "use strict" flag. We plan to improve this so that it can be used for server-side rendering in the future.**

<br />

### Development

1. clone this repo

2. npm install

3. npm run build

<br />

### LICENSE

MIT
