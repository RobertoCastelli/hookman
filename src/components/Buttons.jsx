import React, { useContext } from "react"
import { ContextData } from "../context"
import { AiOutlineReload } from "react-icons/ai"

const Buttons = () => {
	const { criptTitle } = useContext(ContextData)
	return (
		<div>
			<button onClick={() => criptTitle()}>
				<AiOutlineReload size={40} />
			</button>
		</div>
	)
}

export default Buttons
