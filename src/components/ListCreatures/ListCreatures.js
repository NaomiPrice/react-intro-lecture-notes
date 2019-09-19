import React, {Component} from 'react';

class ListCreatures extends Component{
render(){
    const listItemCreatures = this.props.creatureList.map((creature)=>{
        return(<li key={creature.name}>
                 The {creature.name} is from {creature.origin}
               </li>);
    });
    return(
        <ul>
           {listItemCreatures}
        </ul>
        )
    }
}

export default ListCreatures;