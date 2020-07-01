import React from "react"
import ReactDOM from "react-dom"
import App from "App"
import { Provider } from "react-redux"

import { GlobalStyle } from "./styles/globalStyle"
import store from "store"

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
)
