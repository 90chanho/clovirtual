import { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  body {
    margin: 0;
    font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.33;

    &.overflowHidden {
      overflow: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .App {
    text-align: center;
  }

  button {
    background: none;
    border: none;
  }

  button, .clickable {
    cursor: pointer;
  }

  *[hidden] {
    display: none !important;
  }

  .floatLayer {
    display: none;
    z-index: 10;
    &.is-show {
      display: block;
    }
  }
`
