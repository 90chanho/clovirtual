import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.section`
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: left;
`

export default class ArticleContent extends Component {
	render() {
		return (
			<StyledWrapper>
				<p>
					페이스북 댓글 기능을 구현해보았습니다.
					<br />
					기능 구현 사항
					<br />
					1. 댓글 입력
					<br />
					2. 댓글 리스트
					<br />
					3. 댓글 좋아요 <br />
					4. 댓글 삭제 <br />
					5. 댓글의 답글(들여쓰기 형태)
					<br />
				</p>
			</StyledWrapper>
		)
	}
}
