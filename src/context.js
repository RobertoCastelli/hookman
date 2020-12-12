import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghijklmnopqrstuvwxyz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]

	const [title, setTitle] = useState("")
	const [criptedTitle, setCriptedTitle] = useState("")
	const [counter, setCounter] = useState(10)

	// GET the movie TITLE, CRIPT it and reset COUNTER
	const criptTitle = () => {
		const titleTemp = titles[Math.floor(Math.random() * titles.length)]
		const criptTemp = [...titleTemp].map((c) => (c = "_"))
		setCounter(10)
		setTitle(titleTemp)
		setCriptedTitle(criptTemp)
	}
	console.log(title)

	// ADD LETTER to the cripted TITLE
	const compareLetter = (guessedLetter) => {
		let criptTemp = [...criptedTitle]
		let titleTemp = [...title]
		titleTemp.map((c, id) => {
			guessedLetter === c && (criptTemp[id] = c)
			return setCriptedTitle(criptTemp)
		})
	}

	// UPDATE remaining tries
	const countTries = (guessedLetter) => {
		let counterTemp = counter
		!title.includes(guessedLetter) &&
			counterTemp > 0 &&
			setCounter((counterTemp -= 1))
	}

	// MARK letter after selcetion
	const markLetter = (guessedLetter) =>
		(document.getElementById(guessedLetter).style.color = "lightgrey")

	// UPDATE the movie TITLE and remaining TRIES
	const updateTitle = (guessedLetter) => {
		markLetter(guessedLetter)
		compareLetter(guessedLetter)
		countTries(guessedLetter)
	}

	return (
		<ContextData.Provider
			value={{
				criptedTitle,
				criptTitle,
				updateTitle,
				counter,
				letters,
				numbers,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
