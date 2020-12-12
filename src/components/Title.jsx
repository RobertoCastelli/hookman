import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { criptedTitle } = useContext(ContextData)
	return (
		<div>
			<h3 className='movie-title'>{criptedTitle}</h3>
		</div>
	)
}

export default Title
