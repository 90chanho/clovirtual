import React, { Component } from "react"

import Profile from "components/Profile"
import CommentForm from "components/comment/CommentForm"
import CommentContent from "components/comment/CommentContent"

export default class Comment extends Component {
	render() {
		return (
			<li>
				<div>
					<Profile />
					<CommentContent />
				</div>
				<ul className="recomment">
					<li>
						<Profile />
						<CommentContent />
					</li>
				</ul>
				<CommentForm />
			</li>
		)
	}
}
