import React, { useContext } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { ContextData } from "../context"
import { IoMdHeartDislike } from "react-icons/io"

const Buttons = () => {
	const { criptTitle, counter } = useContext(ContextData)
	return (
		<div className='control-panel'>
			<button onClick={() => criptTitle()}>
				<AiOutlineReload size={40} />
			</button>
			<p className='counter'>
				<IoMdHeartDislike size={20} />
				{counter}
			</p>
		</div>
	)
}

export default Buttons
