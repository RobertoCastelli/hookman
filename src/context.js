import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghijklmnopqrstuvwxyz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]
	const showMessageWrong = [
		"Wrong guess!",
		"You are bad at this!",
		"C'mon, concentrate!",
		"A kid could guess in one try",
		"You are gonna hang!",
		"Try the C, just a tip",
		"Stay hungry, stay foolish",
	]

	const [title, setTitle] = useState("")
	const [criptedTitle, setCriptedTitle] = useState("")
	const [counter, setCounter] = useState(10)
	const [message, setMessage] = useState("Click the Hook to start!")

	// GET the movie TITLE, CRIPT it and reset COUNTER
	const criptTitle = () => {
		const titleTemp = titles[Math.floor(Math.random() * titles.length)]
		const criptTemp = [...titleTemp].map((c) => (c = "_"))
		setMessage("Guess the movie title")
		setCounter(10)
		setTitle(titleTemp)
		setCriptedTitle(criptTemp)
	}
	console.log(title)

	const generateWrongMessage = () =>
		showMessageWrong[Math.floor(Math.random() * showMessageWrong.length)]

	// UPDATE the cripted TITLE after the guess
	const compareLetter = (guessedLetter) => {
		let criptTemp = [...criptedTitle]
		let titleTemp = [...title]
		titleTemp.map((c, id) => {
			if (guessedLetter === c) {
				criptTemp[id] = c
				setMessage("Good one, keep it up!")
			}
			return setCriptedTitle(criptTemp)
		})
	}

	// UPDATE remaining tries
	const countTries = (guessedLetter) => {
		let counterTemp = counter
		if (title !== "") {
			if (!title.includes(guessedLetter) && counterTemp > 0) {
				setCounter((counterTemp -= 1))
				setMessage(generateWrongMessage())
			}
		}
	}

	// MARK letter after selection
	const markLetter = (guessedLetter) =>
		title !== ""
			? (document.getElementById(guessedLetter).style =
					"color: lightgrey; pointer-events: none;")
			: alert("Generate a title first you fool!")

	// UPDATE data
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
				message,
				counter,
				letters,
				numbers,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
