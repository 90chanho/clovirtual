import React, { Component, createRef } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const StyledWrapper = styled.div`
	position: fixed;
	z-index: 10000;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);

	display: flex;
	justify-content: center;
	align-items: center;

	article {
		position: relative;
		width: 50vw;
		min-width: 280px;
		min-height: 100px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-align: center;

		header {
			padding-top: 20px;
			p {
				font-weight: bold;
				font-size: 1.5rem;
			}
		}
		section {
			flex: 1;
			padding-top: 20px;
			p {
			}
		}
		footer {
			display: flex;
			padding-top: 20px;

			button {
				flex: 1;
				padding: 20px;

				&.cancel {
					background-color: rgba(229, 230, 235, 0.9);
					&:hover {
						background-color: rgba(229, 230, 235, 1);
					}
				}
				&.action {
					background-color: rgba(14, 152, 245, 0.9);
					color: #fff;
					&:hover {
						background-color: rgba(14, 152, 245, 1);
					}
				}
			}
		}

		.closeButton {
			position: absolute;
			top: 0;
			right: 0;
			padding: 10px;
			font-size: 1.5rem;
		}
	}
`

export default class Modal extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.modal = createRef()
		this.closeButton = createRef()
	}

	handleKeyTrap = e => {
		const focusableNode = this.modal.current.querySelectorAll(
			"[href], [tabindex], button, input, textarea, select"
		)

		const focusableFirstNode = focusableNode[0]
		const focusableLastNode = focusableNode[focusableNode.length - 1]

		const isFocusableFirstNode = Object.is(e.target, focusableFirstNode)
		const isFocusableLastNode = Object.is(e.target, focusableLastNode)

		if (e.keyCode === 9 && e.shiftKey && isFocusableFirstNode) {
			e.preventDefault()
			focusableLastNode.focus()
		}
		if (e.keyCode === 9 && !e.shiftKey && isFocusableLastNode) {
			e.preventDefault()
			focusableFirstNode.focus()
		}
	}

	componentDidMount() {
		document.body.classList.add("overflowHidden")
		window.addEventListener("keydown", this.handleKeyTrap)
		this.closeButton.current.focus()
	}

	componentWillUnmount() {
		document.body.classList.remove("overflowHidden")
		window.removeEventListener("keydown", this.handleKeyTrap)
	}

	render() {
		const { onClose } = this.props
		return createPortal(
			<StyledWrapper className="dimmed">
				<article ref={this.modal}>
					<header>
						<p>{this.props.title}</p>
					</header>
					<section>
						<p>{this.props.desc}</p>
					</section>
					<footer>{this.props.children}</footer>
					<button className="closeButton" onClick={onClose} ref={this.closeButton}>
						X
					</button>
				</article>
			</StyledWrapper>,
			document.body
		)
	}
}

Modal.defaultProps = {
	onClose: () => {}
}
