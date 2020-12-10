import Head from "./components/Head"
import Title from "./components/Title"
import Digits from "./components/Digits"
import Footer from "./components/Footer"
import Buttons from "./components/Buttons"
import ContextProvider from "./context"
import Hangman from "./components/Hangman"

function App() {
	return (
		<ContextProvider>
			<div className='container'>
				<div className='content'>
					<Head />
					<Buttons />
					<Hangman />
					<Title />
					<Digits />
				</div>
				<Footer />
			</div>
		</ContextProvider>
	)
}

export default App
