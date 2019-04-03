import './BirthBar.css';
import React from 'react';

class BirthBar extends React.Component{
    state = { 
        day: '',
        month:''
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.day, this.state.month);
    }

    render() {
        return (
            <div className="ui segment birth-container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">

                    <h3> Select your date of birth </h3>    
                    
                    <div>

                    <label> Month </label> <br />
                    <select type='text' placeholder='Month' name='month' id='month' value={this.state.month}  
                    onChange={e => this.setState({ month: e.target.value})} required>

                        <option value="" disabled defaultValue> Pick a Month </option>
                        <option value='1'>Jan</option>
                        <option value='2'>Feb</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>Aug</option>
                        <option value='9'>Sept</option>
                        <option value='10'>Oct</option>
                        <option value='11'>Nov</option>
                        <option value='12'>Dec</option>
                    </select>
                    <br/>
    
                    <label> Day </label><br />
                    <select type='text' placeholder='Day' name='day' id='day' value={this.state.day}  
                    onChange={e => this.setState({ day: e.target.value})} required>

                        <option value="" disabled defaultValue> Pick a Day</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                        <option value='26'>26</option>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                        <option value='31'>31</option>
                    </select>

                </div>
                    
                <button type="submit" className="ui animated fade button button-color" tabIndex="0">
                <div className="visible content">Click Me! </div>
                <div className="hidden content"> For A Sign</div>
                </button>
                    
                    
                    </div>
                </form>
                
            </div>
        );
    }
}

export default BirthBar;