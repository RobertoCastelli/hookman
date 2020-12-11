import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { criptedTitle } = useContext(ContextData)
	return (
		<div className='movie-title'>
			<p>{criptedTitle}</p>
		</div>
	)
}

export default Title
