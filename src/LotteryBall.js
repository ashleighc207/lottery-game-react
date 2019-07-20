import React, { Component } from 'react';
import './LotteryBall.css';


class LotteryBall extends Component {
	render(){
		return(
			<div className="LotteryBall">
				<h1>{this.props.title}</h1>
				{this.props.data.map(n => {
					return <p>{n}</p>;
				})}
			</div>
		)
	}
}

export default LotteryBall;