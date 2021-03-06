import React, { useContext } from "react"
import { ContextData } from "../context"

const Digits = () => {
	const { letters, updateTitle } = useContext(ContextData)

	return (
		<div className='digits'>
			<ul className='letters'>
				{letters.map((letter) => (
					<li id={letter} key={letter} onClick={() => updateTitle(letter)}>
						{letter}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Digits
