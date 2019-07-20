import React, { Component } from 'react';
import './LotteryBall.css';


class LotteryBall extends Component {
	render(){
		return(
			<div className="LotteryBall">
				<h1 className="LotteryBall-title">{this.props.title}</h1>
				<div className="LotteryBall-container">
					{this.props.data.map(n => {
						return <p className="LotteryBall-ball" key={Math.random() * 10}>{n}</p>;
					})}
				</div>
			</div>
		)
	}
}

export default LotteryBall;