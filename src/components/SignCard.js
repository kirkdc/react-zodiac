import './SignCard.css';
import React from 'react';


const SignCard = (props) => {
    return (
        <div className="ui fluid card">
            <div className="image">
             <img className='star-sign' src={props.image}/>
            </div>
            <div className="content">
                <a className="header"> {props.sign} </a>
            </div>
        </div>
    )
}

SignCard.defaultProps = {
    sign:"This is the sign you've been looking for",
    img:"https://assets.pernod-ricard.com/nz/media_images/test.jpg"
};
// class SignCard extends React.Component {
   
//    render() {
//             // <div className='the-sign' style={{marginTop: '100px'}}>
//             //     <h1> THIS IS THE SIGN YOU'VE BEEN LOOKING FOR</h1>

//             // </div>
//    }
// }

export default SignCard;