import React, { Component } from "react"

export default class CommentOptions extends Component {
	render() {
		return (
			<p>
				<button>좋아요</button>
				<button>답글 달기</button>
				<span>생성 날짜</span>
			</p>
		)
	}
}
