import React, { Component } from 'react';
import './LotteryGame.css';

import LotteryBall from './LotteryBall'

class LotteryGame extends Component {
	render(){
		return(
			<div>
				<LotteryBall />
			</div>
		)
	}
}

export default LotteryGame;