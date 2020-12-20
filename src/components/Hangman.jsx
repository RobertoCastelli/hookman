import React, { useContext } from "react"
import { ContextData } from "../context"

const Hangman = () => {
	const { imageHang } = useContext(ContextData)

	return (
		<div className='hangman'>
			<img src={imageHang} alt='hangman' />
		</div>
	)
}

export default Hangman
