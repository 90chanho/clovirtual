import React, { Component } from "react"
import Comment from "components/comment/Comment"
import CommentForm from "components/comment/CommentForm"

export default class ArticleComment extends Component {
	render() {
		return (
			<div>
				<CommentForm />
				<ul>
					{/* 리스트 렌더링 */}
					<Comment />
				</ul>
			</div>
		)
	}
}
