import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const [answer, setAnswer] = useState([])
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")

	const handleDigits = (char) => console.log(char)

	const generateWord = () => {
		const words = ["javascript", "monkey", "amazing", "pancake"]
		const word = words[Math.floor(Math.random() * words.length)]
		let answerTemp = []
		for (let i = 0; i < word.length; i++) {
			answerTemp[i] = "_"
		}
		for (let j = 0; j < word.length; j++) {
			let guess = "a"
			if (word[j] === guess) {
				answerTemp[j] = guess
			}
		}
		return setAnswer(answerTemp.join(" "))
	}

	return (
		<ContextData.Provider
			value={{
				letters,
				numbers,
				answer,
				handleDigits,

				generateWord,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
