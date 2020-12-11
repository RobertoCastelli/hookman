import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { criptedTitle } = useContext(ContextData)
	return (
		<div className='movie-title'>
			<h3>{criptedTitle}</h3>
		</div>
	)
}

export default Title
