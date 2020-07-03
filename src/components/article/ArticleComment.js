import React, { Component } from "react"
import Comment from "components/comment/Comment"
import CommentAddForm from "components/comment/CommentAddForm"

export default class ArticleComment extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { articleData } = this.props
		return (
			<div>
				<CommentAddForm aid={articleData.aid} />
				<ul>
					{articleData.comments.map(comment => {
						return <Comment key={comment.cid} articleData={articleData} commentData={comment} />
					})}
				</ul>
			</div>
		)
	}
}
