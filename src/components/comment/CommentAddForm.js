import React, { Component, createRef } from "react"
import styled from "styled-components"
import moment from "moment"

import store from "store"
import Profile from "components/Profile"
import { ADD_ARTICLE_COMMENT, ADD_RE_COMMENT } from "store/actions/articleAction"
import { setUid } from "lib/util"

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
	constructor(props) {
		super(props)
		this.props = props
		this.input = createRef()
	}

	state = {
		commentContent: ""
	}

	onChange = e => {
		this.setState({
			commentContent: e.target.value
		})
	}

	onAddComment = e => {
		if (e.keyCode === 13 && this.state.commentContent.length) {
			const payload = {
				aid: this.props.aid,
				content: this.state.commentContent,
				createData: moment(),
				authorUid: store.getState().authReducer.auth.uid,
				likes: [],
				comments: []
			}
			this.setState({
				commentContent: ""
			})
			if (this.props.commentType === "reComment") {
				payload.cid = this.props.cid
				payload.ccid = setUid()
				store.dispatch({ type: ADD_RE_COMMENT, payload })
			} else {
				payload.cid = setUid()
				store.dispatch({ type: ADD_ARTICLE_COMMENT, payload })
			}
		}
	}

	componentDidMount() {
		this.props.focusReCommentForm && this.input.current.focus()
	}

	render() {
		return (
			<StyledWrapper>
				<Profile type="small" />
				<input
					ref={this.input}
					type="text"
					placeholder="댓글을 입력하세요..."
					value={this.state.commentContent}
					onChange={this.onChange}
					onKeyDown={this.onAddComment}
				/>
			</StyledWrapper>
		)
	}
}

CommentAddForm.defaultProps = {
	commentType: "comment"
}
