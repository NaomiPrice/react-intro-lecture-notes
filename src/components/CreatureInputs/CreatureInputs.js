import React, {Component} from 'react';

class CreatureInputs extends Component{
render(){
    return(
        <div>
           <input placeholder="name" onChange={(event) => this.props.handleChangeForm(event, 'name')}></input>
            <input placeholder="city" onChange={(event) => this.props.handleChangeForm(event, 'city')}></input>
            <input placeholder="zip code" onChange={(event) => this.props.handleChangeForm(event, 'zipCode')}></input>
                
            <br></br>
            <button onClick={this.props.handleClick}>SUBMIT</button>
        </div>
        )
    }
}

export default CreatureInputs;