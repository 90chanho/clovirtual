import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledWrapper = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	background-color: #d3d5da;
	border: 1px solid #bcbfc4;
	box-sizing: border-box;
	margin-right: 10px;

	&.small {
		width: 34px;
		height: 34px;
		i {
			font-size: 1rem;
		}
	}

	i {
		font-size: 1.5rem;
		color: #fff;
	}
`

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { type } = this.props
		return (
			<StyledWrapper className={type === "small" ? "small" : "normal"}>
				<i className="fas fa-user-alt"></i>
			</StyledWrapper>
		)
	}
}

Profile.propTypes = {
	type: PropTypes.string.isRequired
}

Profile.defaultProps = {
	type: "normal"
}
