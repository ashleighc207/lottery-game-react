import React, { Component } from 'react';
import './IncredimillionsCard.css';

class IncredimillionsCard extends Component {
	render(){
		return(
			<div> 
				<h1>My Incredicard!</h1>
				<div className="LotteryBall">
					<p>{this.props.lottoNums}</p>
				</div>
			</div>
		)
	}
}

export default IncredimillionsCard;