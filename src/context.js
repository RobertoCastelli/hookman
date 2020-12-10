import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]

	const [guess, setGuess] = useState("")
	const [title, setTitle] = useState("Guess the movie title")

	// GET the guessed character
	const getGuess = (char) => setGuess(char)

	// GET a movie TITLE
	const getTitle = () =>
		setTitle(titles[Math.floor(Math.random() * titles.length)])

	return (
		<ContextData.Provider
			value={{
				getGuess,
				title,
				getTitle,
				letters,
				numbers,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
