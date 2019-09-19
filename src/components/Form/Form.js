import React, { Component } from 'react';

class Form extends Component {
    state = {
        user: {
            name: '',
            city: ''
        },
        displayUser: {
            name: "display Name",
            city: 'display City'
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
                zip: this.state.user.zip
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
        const listItemCreatures = this.state.creatureList.map((creature)=>{
            return(<li key={creature.name}>
                The {creature.name} is from {creature.origin}
                </li>);
        });
        
        // for (let creature of this.state.creatureList){
        //     listItemCreatures.push(<li>{creature}</li>);
        // }


       return(
            <div>
                <input placeholder="name" onChange={(event) => this.handleChangeForm(event, 'name')}></input>
                <input placeholder="city" onChange={(event) => this.handleChangeForm(event, 'city')}></input>
                <input placeholder="zip code" onChange={(event) => this.handleChangeForm(event, 'zip')}></input>
                
                <br></br>
                <button onClick={this.handleClick}>SUBMIT</button>
                <p>{this.state.displayUser.name}</p>
                <p>{this.state.displayUser.city}</p>
                <p>{this.state.displayUser.zip}</p>

                {/* Splatting to the DOM looks like this:
                <pre>
                    {JSON.stringify(this.state.creatureList, null,2)}
                </pre> */}
                <ul>
                    {listItemCreatures}
                </ul>
            </div>
       );
    }

}// end componenet

export default Form;