import React, { useContext } from "react"
import { ContextData } from "../context"
import { IoMdHeartDislike } from "react-icons/io"

const LifeCounter = () => {
	const { counter } = useContext(ContextData)
	return (
		<div>
			<p className='life-counter'>
				<IoMdHeartDislike size={20} />
				{counter}
			</p>
		</div>
	)
}

export default LifeCounter
