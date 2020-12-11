import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]

	const [guess, setGuess] = useState("")
	const [title, setTitle] = useState("guess the movie title")

	// GET the guessed character
	const getGuess = (char) => setGuess(char)

	// CRIPT the movie TITLE
	const criptTitle = () => {
		const titleTemp = titles[Math.floor(Math.random() * titles.length)]
		const criptTemp = [...titleTemp].map((c) => (c = "_")).join(" ")
		setTitle(criptTemp)
	}

	return (
		<ContextData.Provider
			value={{
				title,
				criptTitle,
				letters,
				numbers,
				getGuess,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
