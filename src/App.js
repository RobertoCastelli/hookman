import Head from "./components/Head"
import Title from "./components/Title"
import Digits from "./components/Digits"
import Footer from "./components/Footer"
import Buttons from "./components/Buttons"
import ContextProvider from "./context"
import Hangman from "./components/Hangman"
import GameMessage from "./components/GameMessage"
import LifeCounter from "./components/LifeCounter"

function App() {
	return (
		<ContextProvider>
			<div className='container'>
				<div className='content'>
					<Head />
					<Hangman />
					<GameMessage />
					<LifeCounter />
					<Buttons />
					<Digits />
					<Title />
				</div>
				<Footer />
			</div>
		</ContextProvider>
	)
}

export default App
