import React, { useContext } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { ContextData } from "../context"

const Buttons = () => {
	const { criptTitle } = useContext(ContextData)
	return (
		<div className='buttons'>
			<button onClick={() => criptTitle()}>
				<AiOutlineReload size={40} />
			</button>
		</div>
	)
}

export default Buttons
