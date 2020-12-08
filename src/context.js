import React from "react"
export const ContextData = React.createContext()

const ContextProvider = (props) => {
	const letters = "abcdefghilmnopqrstuvz".split("")
	const numbers = "1234567890".split("")

	const handleDigits = (char) => console.log(char)
	const handleTitle = () => console.log("ciao")

	return (
		<ContextData.Provider
			value={{ letters, numbers, handleDigits, handleTitle }}>
			{props.children}
		</ContextData.Provider>
	)
}

export default ContextProvider
