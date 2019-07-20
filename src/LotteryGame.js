import React, { Component } from 'react';
import './LotteryGame.css';

import LotteryBall from './LotteryBall'

class LotteryGame extends Component {
	constructor(props){
		super(props);
		this.genLottoNums = this.genLottoNums.bind(this)
		this.state = {
			lottoNums: []
		}
	}
	static defaultProps = {
		gameLength: 6,
		range: [1, 40],
		title: "Incredimillions Lottery"
	}
	genLottoNums(){
		const num = this.props.gameLength;
		let numArr = [];
		for(let i = 0; i < num; i++){
			numArr.push(Math.ceil(Math.random() * 10))
		}
		this.setState({lottoNums: numArr})
	}

	render(){

		return(
			<div className="LotteryGame">
				{this.state.lottoNums.map((l) => { 
					return <LotteryBall 
								data={l}
								key={Math.random() * 10} 
								/>
					})
				}
				<button onClick={this.genLottoNums}>I wanna play!</button>
			</div>
		)
	}
}

export default LotteryGame;