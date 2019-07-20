import React, { Component } from 'react';
import './IncredimillionsCard.css';

class IncredimillionsCard extends Component {
	render(){
		return(
			<div> 
				<h1>My Incredicard!</h1>
				<div className="LotteryBall">
					{this.props.lottoNums.map(n => {
						return <p key={Math.random() * 10}>{n}</p>;
					})}
				</div>
			</div>
		)
	}
}

export default IncredimillionsCard;