import React, { useContext } from "react"
import { ContextData } from "../context"

const Buttons = () => {
	const { getTitle } = useContext(ContextData)
	return (
		<div className='buttons'>
			<button onClick={() => getTitle()}>generate title</button>
		</div>
	)
}

export default Buttons
