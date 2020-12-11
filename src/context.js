import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]

	const [title, setTitle] = useState("guess the movie title")
	const [criptedTitle, setCriptedTitle] = useState("")

	// GET the movie TITLE and CRIPT it
	const criptTitle = () => {
		const titleTemp = titles[Math.floor(Math.random() * titles.length)]
		const criptTemp = [...titleTemp].map((c) => (c = "_")).join(" ")
		setTitle(titleTemp)
		setCriptedTitle(criptTemp)
	}
	console.log(title)

	// COMPARE guessedLetter & UPDATE the movie TITLE
	const updateTitle = (guessedChar) => {
		let criptTemp = [...criptedTitle].map((c) => {
			if (c === guessedChar) {
				console.log(c)
			} else {
				console.log("no")
			}
		})
		setCriptedTitle(criptTemp)
	}

	return (
		<ContextData.Provider
			value={{
				criptedTitle,
				criptTitle,
				updateTitle,
				letters,
				numbers,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
