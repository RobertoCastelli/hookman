import React, { useState } from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghijklmnopqrstuvwxyz".split("")
	const numbers = "1234567890".split("")
	const titles = ["javascript", "monkey", "amazing", "pancake"]

	const [title, setTitle] = useState("")
	const [criptedTitle, setCriptedTitle] = useState("")

	// GET the movie TITLE and CRIPT it
	const criptTitle = () => {
		const titleTemp = titles[Math.floor(Math.random() * titles.length)]
		const criptTemp = [...titleTemp].map((c) => (c = "_"))
		setTitle(titleTemp)
		setCriptedTitle(criptTemp)
	}
	console.log(title)

	// COMPARE guessedLetter & UPDATE the movie TITLE
	const updateTitle = (guessedLetter) => {
		let criptTemp = [...criptedTitle]
		let titleTemp = [...title]
		titleTemp.forEach((c, id) => {
			guessedLetter === c && (criptTemp[id] = c)
			setCriptedTitle(criptTemp)
		})
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
