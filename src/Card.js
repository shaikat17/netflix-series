import React from 'react'


function Card(props) {
	return (
		<>
		<div className="card">
			<img src={props.imgSrc} alt="" className="cardImg" />
			<div className="cardInfo">
				<span className="cardCategory">{props.title}</span>
				<h3 className="cardTitle">Lorem ipsum dolor sit amet, consectetur.</h3>
				<a href="{props.link}" target="_blank">
					<button>Watch Now</button>
				</a>
			</div>
		</div>
			</>
		)
}

export default Card;