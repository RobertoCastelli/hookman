import React, { useContext } from "react"
import { ContextData } from "../context"
//import { AiOutlineReload } from "react-icons/ai"
import { GiHook } from "react-icons/gi"

const Buttons = () => {
	const { criptTitle } = useContext(ContextData)
	return (
		<div>
			<button onClick={() => criptTitle()}>
				<GiHook size={40} />
			</button>
		</div>
	)
}

export default Buttons
