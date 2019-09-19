import React, { Component } from 'react';
import CurrentNewCreature from '../CurrentNewCreature/CurrentNewCreature';
import ListCreatures from '../ListCreatures/ListCreatures';
import CreatureInputs from '../CreatureInputs/CreatureInputs';


class Form extends Component {
    state = {
        user: {
            name: '',
            city: '',
            zipCode: ''
        },
        
        displayUser: {
            name: "display Name",
            city: 'display City',
            zipCode: 'displayZipCode'
        },
    
        creatureList: [
            { name: 'Unicorn', origin: 'Europe' },
            { name: 'Sphinx', origin: 'Persia' },
            { name: 'Dryad', origin: 'Greece' },
            { name: 'Kappa', origin: 'Japan' },
            { name: 'Jackalope', origin: 'America' },
          ],
    }

    // changeName = (event)=>{
    //     //using the spread operator update user object to reclect new name
    //     this.setState({user: {
    //                         ...this.state.user, 
    //                         name: event.target.value
    //                     }
    //                 });
    //     console.log(event.target.value);
    //     console.log(this.state.user);
    // }//end changeName

    // changeCity = (event)=>{
    //     this.setState({
    //         user: {
    //             ...this.state.user,
    //             city: event.target.value
    //         }
    //     })
    //     console.log(event.target.value);
    //     console.log('hello from city');
    // }//end changeCity

    handleClick = ()=>{
        this.setState({
            displayUser: {
                name: this.state.user.name,
                city: this.state.user.city,
                zipCode: this.state.user.zipCode
            }
        })
    }//end handleClick

    // changeZip = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         user: {
    //            ...this.state.user,
    //            zip: event.target.value 
    //         }
    //     })
    // }

    handleChangeForm = (event, porpertyName)=>{
        this.setState({
            user:{
                ...this.state.user,
                [porpertyName]: event.target.value
            }
        })
    }

    render(){
        // const listItemCreatures = this.state.creatureList.map((creature)=>{
        //     return(<li key={creature.name}>
        //         The {creature.name} is from {creature.origin}
        //         </li>);
        // });
        
        // for (let creature of this.state.creatureList){
        //     listItemCreatures.push(<li>{creature}</li>);
        // }


       return(
            <div>
                <CreatureInputs 
                    handleChangeForm={this.handleChangeForm}
                    handleClick={this.handleClick}
                />
                {/* <input placeholder="name" onChange={(event) => this.handleChangeForm(event, 'name')}></input>
                <input placeholder="city" onChange={(event) => this.handleChangeForm(event, 'city')}></input>
                <input placeholder="zip code" onChange={(event) => this.handleChangeForm(event, 'zipCode')}></input>
                
                <br></br>
                <button onClick={this.handleClick}>SUBMIT</button> */}
                <CurrentNewCreature displayNewCreature={this.state.displayUser} />
                {/* <p>{this.state.displayUser.name}</p>
                <p>{this.state.displayUser.city}</p>
                <p>{this.state.displayUser.zipCode}</p> */}

                {/* Splatting to the DOM looks like this:
                <pre>
                    {JSON.stringify(this.state.creatureList, null,2)}
                </pre> */}
                <ListCreatures creatureList={this.state.creatureList}/>
                {/* <ul>
                    {listItemCreatures}
                </ul> */}
            </div>
       );
    }

}// end componenet

export default Form;