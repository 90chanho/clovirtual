import React, { Component } from "react"
import Comment from "components/comment/Comment"
import CommentAddForm from "components/comment/CommentAddForm"

export default class ArticleComment extends Component {
	render() {
		return (
			<div>
				<CommentAddForm />
				<ul>
					<Comment />
				</ul>
			</div>
		)
	}
}
