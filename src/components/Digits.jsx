import React, { useContext } from "react"
import { ContextData } from "../context"

const Digits = () => {
	const { letters, numbers, updateTitle } = useContext(ContextData)

	return (
		<div className='digits'>
			<ul>
				{letters.map((letter) => (
					<li key={letter} onClick={() => updateTitle(letter)}>
						{letter}
					</li>
				))}
			</ul>
			<ul>
				{numbers.map((number) => (
					<li key={number} onClick={() => updateTitle(number)}>
						{number}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Digits
