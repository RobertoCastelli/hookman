import React, { useState, useEffect } from "react"
import click1 from "./sounds/clicks.wav"
import uno from "./images/1.png"
import due from "./images/2.png"
import tre from "./images/3.png"
import quattro from "./images/4.png"
import cinque from "./images/5.png"
import sei from "./images/6.png"
import sette from "./images/7.png"

export const ContextData = React.createContext()

const ContextProvider = (props) => {
	// GLOBALS
	const clicks = new Audio(click1)
	const lis = document.querySelectorAll("li")
	const letters = "abcdefghijklmnopqrstuvwxyz".split("")
	const showMessageWrong = [
		"wrong guess!",
		"you are bad at this!",
		"c'mon, concentrate!",
		"a kid could guess in one try",
		"you are gonna hang!",
		"try the 'C', just a tip",
		"stay hungry, stay foolish",
	]

	// STATES
	const [word, setWord] = useState("")
	const [title, setTitle] = useState("")
	const [criptedTitle, setCriptedTitle] = useState("")
	const [counter, setCounter] = useState(6)
	const [message, setMessage] = useState("click the hook to start!")
	const [imageHang, setImageHang] = useState(uno)

	// DEBUG
	console.log(title) // <-< Delete This!

	// CICLE HANGMAN IMAGE
	const updateImage = () => {
		switch (counter) {
			case 6:
				setImageHang(uno)
				break
			case 5:
				setImageHang(due)
				break
			case 4:
				setImageHang(tre)
				break
			case 3:
				setImageHang(quattro)
				break
			case 2:
				setImageHang(cinque)
				break
			case 1:
				setImageHang(sei)
				break
			case 0:
				setImageHang(sette)
				break
			default:
				setImageHang(uno)
				break
		}
	}

	// DISABLE selected letter
	const disableLetter = (guessedLetter) =>
		(document.getElementById(guessedLetter).style =
			"color: lightgrey; pointer-events: none;")

	// GENERATE random MESSAGES when WRONG
	const generateRandomMessageIfWrong = () =>
		showMessageWrong[Math.floor(Math.random() * showMessageWrong.length)]

	// FETCH random WORD
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				"https://random-word-api.herokuapp.com/word?number=1"
			)
			const data = await res.json()
			setWord(data[0])
		}
		fetchData()
	}, [title])

	// GET the movie TITLE, CRIPT IT and reset COUNTER
	const criptTitle = () => {
		const titleTemp = [...word]
		const criptTemp = titleTemp.map((c) => (c = "_"))
		lis.forEach((li) => (li.style = "color: #333333; pointer-events: visible;"))
		setMessage("guess the magic word")
		setCounter(6)
		setTitle(titleTemp)
		setCriptedTitle(criptTemp)
	}

	// SELECT and DISABLE letter ONLY if game STARTED
	const selectLetter = (guessedLetter) =>
		title !== ""
			? disableLetter(guessedLetter)
			: alert("generate a title first you fool!")

	// UPDATE the cripted TITLE after the guess
	const compareLetter = (guessedLetter) => {
		let criptTemp = [...criptedTitle]
		let titleTemp = [...title]
		titleTemp.map((c, id) => {
			if (guessedLetter === c) {
				criptTemp[id] = c
				setMessage("good one, keep it up!")
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
				setMessage(generateRandomMessageIfWrong())
			}
		}
	}

	// WIN -> END GAME
	useEffect(() => {
		if (counter !== 6) {
			if ([...criptedTitle].every((c) => c !== "_")) {
				lis.forEach((li) => disableLetter(li.innerHTML))
				setMessage("you win!")
			}
		}
	}, [criptedTitle, counter, lis])

	// LOSE -> END GAME
	useEffect(() => {
		if (counter === 0) {
			setMessage(`you lose! the word was: ${title.join("")}`)
			lis.forEach((li) => disableLetter(li.innerHTML))
		}
	}, [counter, title, lis])

	useEffect(() => {
		updateImage()
	}, [counter])

	// UPDATE GAME
	const updateTitle = (guessedLetter) => {
		selectLetter(guessedLetter)
		compareLetter(guessedLetter)
		countTries(guessedLetter)
		clicks.play()
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
				imageHang,
			}}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
