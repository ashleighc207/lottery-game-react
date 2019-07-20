import React, { Component } from 'react';
import './LotteryGame.css';

import LotteryBall from './LotteryBall'
import IncredimillionsCard from './IncredimillionsCard'

class LotteryGame extends Component {
	constructor(props){
		super(props);
		this.genLottoNums = this.genLottoNums.bind(this)
		this.state = {
			lottoNums: [],
			myNums: [],
			isWinner: false
		}
	}
	static defaultProps = {
		gameLength: 6,
		range: [1, 40],
		title: "Incredimillions Lottery"
	}
	genLottoNums(){
		const num = this.props.gameLength;
		let isWinner = false;
		let lottoArr = [], myNumsArr = [];
		for(let i = 0; i < num; i++){
			myNumsArr.push(Math.ceil(Math.random() * 10))
			lottoArr.push(Math.ceil(Math.random() * 10))
		}
		this.setState({
			lottoNums: lottoArr,
			myNums: myNumsArr
		})

		if(lottoArr.sort((a,b)=> {return a-b}).join(',') === myNumsArr.sort((a,b)=> {return a-b}).join(',')) {
			this.setState({isWinner: true})
		} 

	}

	render(){
		return(
			<div className="LotteryGame">
				{this.state.isWinner ? <h1 className="LotteryGame-winner">You won the {this.state.props.title}!</h1> : null}
				<div className="LotteryGame-game-container">
					<LotteryBall 
						data={this.state.lottoNums}
						title={this.props.title}
						key={Math.random() * 10} 
					/>
					<IncredimillionsCard 
						lottoNums={this.state.myNums}
					/>
				</div>
				<button className="LotteryGame-btn" onClick={this.genLottoNums}>Let's play!</button>
			</div>
		)
	}
}

export default LotteryGame;