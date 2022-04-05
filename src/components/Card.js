import React from 'react';

const Card= (robots)=>{
	const {id,name,email}=robots;
	return (
         <div className='tc bg-light-green pa2 ma2 dib br2 grow bw2 shadow-5'>
          <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
          <div>
          <h2> {name} </h2>
          <p> {email}</p>
          </div>
         </div>


  );
}

export default Card;

// const Card = (robot) => {
//   const {id, name, username, email} = robot;
// 	return(
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt='robot' src={`https://robohash.org/${id}?150x150`} />
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>);
// }