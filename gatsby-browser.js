import React from "react"

import { ThemeProvider } from "./src/context/themeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

// add IntersectionObserver polyfill for safari
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
    console.log("IntersectionObserver polyfilled ;)")
  }
}
