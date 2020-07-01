import React, { Component } from "react"
import Profile from "components/Profile"

export default class CommentForm extends Component {
	render() {
		return (
			<div>
				<Profile />
				<input type="text" placeholder="댓글을 입력하세요..." />
				<p>글을 게시하려면 Enter 키를 누르세요</p>
			</div>
		)
	}
}
