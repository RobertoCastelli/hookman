import React from "react"
import Digits from "./Digits"
import Message from "./Message"
import Title from "./Title"

const Board = () => {
	return (
		<div>
			<Message />
			<Title />
			<Digits />
		</div>
	)
}

export default Board
