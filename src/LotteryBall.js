import React, { Component } from 'react';
import './LotteryBall.css';


class LotteryBall extends Component {
	render(){
		return(
			<div className="LotteryBall">
				<h1>{this.props.title}</h1>
				<div>
					{this.props.data.map(n => {
						return <p key={Math.random() * 10}>{n}</p>;
					})}
				</div>
			</div>
		)
	}
}

export default LotteryBall;