import React from "react"

const Title = () => {
	const words = ["javascript", "monkey", "amazing", "pancake"]

	const word = words[Math.floor(Math.random() * words.length)]

	const answer = []
	let remainingLetters = word.length

	for (let i = 0; i < word.length; i++) {
		answer[i] = "_"
	}

	for (let j = 0; j < word.length; j++) {
		let guess = "r"
		if (word[j] === guess) {
			answer[j] = guess
		}
	}
	console.log(remainingLetters)

	return (
		<div>
			<p>{answer.join(" ")}</p>
		</div>
	)
}

export default Title
