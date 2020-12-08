import React from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")

	const handleDigits = (char) => console.log(char)
	const handleTitle = () => console.log("ciao")

	const generateWord = () => {
		const words = ["javascript", "monkey", "amazing", "pancake"]
		const word = words[Math.floor(Math.random() * words.length)]
		const answer = []
		for (let i = 0; i < word.length; i++) {
			answer[i] = "_"
		}
		for (let j = 0; j < word.length; j++) {
			let guess = "a"
			if (word[j] === guess) {
				answer[j] = guess
			}
		}
		return answer.join(" ")
	}

	return (
		<ContextData.Provider
			value={{ letters, numbers, handleDigits, handleTitle, generateWord }}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
