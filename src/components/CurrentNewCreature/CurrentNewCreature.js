import React, {Component} from 'react';

class CurrentNewCreature extends Component{
render(){
    return(
        <div>
            <p>{this.props.displayNewCreature.name}</p>
            <p>{this.props.displayNewCreature.city}</p>
            <p>{this.props.displayNewCreature.zipCode}</p>
        </div>
        )
    }
}

export default CurrentNewCreature;