import React, { Component } from "react"
import styled from "styled-components"
import AppHeader from "components/AppHeader"
import AppMain from "components/AppMain"
import { onHideAllFloatLayer } from "lib/util"

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

class App extends Component {
	handleFloatLayer = e => {
		if (
			!e.target.classList.contains("floatLayer") &&
			!e.target.classList.contains("toggleFloatLayerButton")
		) {
			onHideAllFloatLayer()
		}
	}

	componentDidMount() {
		document.body.addEventListener("click", this.handleFloatLayer)
	}
	componentWillUnmount() {
		document.body.removeEventListener("click", this.handleFloatLayer)
	}

	render() {
		return (
			<StyledWrapper className="App">
				<AppHeader />
				<AppMain />
			</StyledWrapper>
		)
	}
}

export default App
