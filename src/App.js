import Head from "./components/Head"
import Board from "./components/Board"
import Footer from "./components/Footer"
import ContextProvider from "./context"

function App() {
	return (
		<ContextProvider>
			<div className='container'>
				<div className='content'>
					<Head />
					<Board />
				</div>
				<Footer />
			</div>
		</ContextProvider>
	)
}

export default App
