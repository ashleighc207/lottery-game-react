import React, { Component } from 'react';
import './IncredimillionsCard.css';

class IncredimillionsCard extends Component {
	render(){
		return(
			<div className="IncredimillionsCard"> 
				<h1 className="IncredimillionsCard-title">My Numbers</h1>
				<div className="IncredimillionsCard-container">
					{this.props.lottoNums.map(n => {
						return <p className="IncredimillionsCard-number" key={Math.random() * 10}>{n}</p>;
					})}
				</div>
			</div>
		)
	}
}

export default IncredimillionsCard;