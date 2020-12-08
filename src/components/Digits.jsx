import React, { useContext } from "react"
import { ContextData } from "../context"

const Digits = () => {
	const { letters, numbers, handleDigits } = useContext(ContextData)

	return (
		<div>
			<ul>
				{letters.map((letter) => (
					<li key={letter} onClick={() => handleDigits(letter)}>
						{letter}
					</li>
				))}
			</ul>
			<ul>
				{numbers.map((number) => (
					<li key={number} onClick={() => handleDigits(number)}>
						{number}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Digits
