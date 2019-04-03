import './App.css'
import React from 'react';
import BirthBar from './BirthBar';
import AnimatedTitle from './AnimatedTitle';
import SignCard from './SignCard';



class App extends React.Component {
    state = { 
      sign: '',
      img: ''
  };

   onBirthSubmit =  (day, month) => {
        console.log(day, month);
    }
    
    calculateSign = (day, month) => {
          let signs = [
            {
              name:'Capricorn',
              img: 'https://i.ibb.co/th4c4rc/Capricorn.jpg'
            },
            {
              name:'Aquarius',
              img: 'https://i.ibb.co/f0z5cnf/Aquarius.jpg'
            },
            {
              name:'Pisces',
              img: 'https://i.ibb.co/rZSJJD8/Pisces.jpg'
            },
            {
              name:'Aries',
              img: 'https://i.ibb.co/NLpsCj0/Aries.jpg'
            },
            {
              name:'Taurus',
              img: 'https://i.ibb.co/wd1X9fq/Taurus.jpg'
            },
            {
              name:'Gemini',
              img: ' https://i.ibb.co/sQsZJ5b/Gemini.jpg'
            },
            {
              name:'Cancer',
              img: 'https://i.ibb.co/5cRtCYg/Cancer.jpg'
            },
            {
              name:'Leo',
              img: 'https://i.ibb.co/TRZRQfF/Leo.jpg'
            },
            {
              name:'Virgo',
              img: 'https://i.ibb.co/hcDpJxF/Virgo.jpg'
            },
            {
              name:'Libra',
              img: 'https://i.ibb.co/zQ0wmzj/Libra.jpg'
            },
            {
              name:'Scorpio',
              img: 'https://i.ibb.co/NNNqLp8/Scorpio.jpg'
            },
            {
              name:'Sagittarius',
              img: 'https://i.ibb.co/4W1RdXM/Sagittarus.jpg'
            },
          ]
            //console.log('reached here');

        if((month == 1 && day <= 19) || (month === 12 && day >=22)) {
            this.setState({sign: signs[0].name});
            this.setState({img: signs[0].img});
            console.log(this.state);// Why does this show an empty array??? but when i render it shows?

          } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
            this.setState({sign: signs[1].name});
            this.setState({img: signs[1].img});
              console.log('aquarius');       

          } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            this.setState({sign: signs[2].name});
            this.setState({img: signs[2].img});

          } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
            this.setState({sign: signs[3].name});
            this.setState({img: signs[3].img});
      
          } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
            this.setState({sign: signs[4].name});
            this.setState({img: signs[4].img});

          } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            this.setState({sign: signs[5].name});
            this.setState({img: signs[5].img});

          } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
            this.setState({sign: signs[6].name});
            this.setState({img: signs[6].img});

          } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
            this.setState({sign: signs[7].name});
            this.setState({img: signs[7].img});

          } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
            this.setState({sign: signs[8].name});
            this.setState({img: signs[8].img});
          
          } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
            this.setState({sign: signs[9].name});
            this.setState({img: signs[9].img});

          } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
            this.setState({sign: signs[10].name});
            this.setState({img: signs[10].img});
        
          } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
            this.setState({sign: signs[11].name});
            this.setState({img: signs[11].img});
           
          } else {
              return 'You broke me :(';
          }

        }

    render() {
        return (
            <div className="main-container">
                <div className="bg-video">
                  <video id="vid" className="bg-video-content" autoPlay muted loop>
                      <source src="https://res.cloudinary.com/crudecloud/video/upload/v1554259904/Stars_Background_Vid.mp4" type="video/mp4"></source>
                  </video>
                </div>
                
                <div className='cool-header'>
                    <AnimatedTitle/ >
                </div>  

                <div className="ui container" style={{marginTop: '50px'}}> 
                    <BirthBar onSubmit={this.calculateSign} /> 

                </div>


                 <div className="sign-card" > 
                  <SignCard sign={this.state.sign} image={this.state.img} />
                      {/* <h1> {this.state.sign} </h1>
                      <img src={this.state.img} alt='zodiac sign'/> */}
                </div> 
                
            </div>
        ) 
    }
}

export default App;