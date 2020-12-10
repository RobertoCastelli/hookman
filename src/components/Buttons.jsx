import React, { useContext } from "react"
import { ContextData } from "../context"

const Buttons = () => {
	const { getTitle, playAgain } = useContext(ContextData)
	return (
		<div className='buttons'>
			<button onClick={() => playAgain()}>play again</button>
			<button onClick={() => getTitle()}>generate title</button>
		</div>
	)
}

export default Buttons
