import React, { Component } from "react"
import styled from "styled-components"
import Profile from "components/Profile"

const StyledWrapper = styled.div`
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	input {
		flex: 1;
		background-color: #f1f2f5;
		border-radius: 20px;
		border: none;
		padding: 8px 12px;
		box-sizing: border-box;
	}
`

export default class CommentAddForm extends Component {
	render() {
		return (
			<StyledWrapper>
				<Profile type="small" />
				<input type="text" placeholder="댓글을 입력하세요..." />
			</StyledWrapper>
		)
	}
}
