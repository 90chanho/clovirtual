import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Profile from "components/Profile"
import CommentAddForm from "components/comment/CommentAddForm"
import CommentContent from "components/comment/CommentContent"
import store from "store"

const StyledWrapper = styled.li`
	.commentContent,
	.reCommentItem {
		display: flex;
		margin-top: 10px;
	}
	.reCommentList {
		padding-left: 45px;
	}
`

class Comment extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	state = {
		hideReCommentForm: true,
		focusReCommentForm: false
	}

	showReCommentForm = () => {
		this.setState({
			hideReCommentForm: false,
			focusReCommentForm: true
		})
	}

	render() {
		const { articleData, commentData, auth } = this.props
		const userData = auth

		return (
			<StyledWrapper>
				<div className="commentContent">
					<Profile type="small" userData={userData} />
					<CommentContent
						commentData={commentData}
						userData={userData}
						showReCommentForm={this.showReCommentForm}
					/>
				</div>
				<ul className="reCommentList">
					{commentData.comments.map(recomment => {
						return (
							<li key={recomment.ccid} className="reCommentItem">
								<Profile type="small" />
								<CommentContent
									commentType="reComment"
									commentData={recomment}
									userData={userData}
								/>
							</li>
						)
					})}
					{!this.state.hideReCommentForm && (
						<li>
							<CommentAddForm
								commentType="reComment"
								aid={articleData.aid}
								cid={commentData.cid}
								focusReCommentForm={this.state.focusReCommentForm}
							/>
						</li>
					)}
				</ul>
			</StyledWrapper>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.authReducer.auth,
	users: state.userReducer.users,
	articles: state.articleReducer.articles
})

export default connect(mapStateToProps, null)(Comment)
