import React from "react"
import styled from "styled-components"
import AppHeader from "components/AppHeader"
import AppMain from "components/AppMain"

const StyledWrapper = styled.div``

function App() {
	return (
		<StyledWrapper className="App">
			<AppHeader />
			<AppMain />
		</StyledWrapper>
	)
}

export default App
