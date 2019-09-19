import React, { Component } from 'react';



class Information extends Component {
  constructor(props){
    super(props);
    //this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: 'Something or Other...',
      inputValueTwo: 'Well hello there!',
      array1: [2, 5, 7],
      number: 10
    }
  }

  handleChange = ((event)=>{
    // console.log('hello');
    console.log(event.target.value);
    this.setState({ 
      inputValue: event.target.value
    });
  })

  handleClick = (()=>{
    const array1 = this.state.array1;
    const number = this.state.number;
    console.log(array1);
    console.log(number);
    //... is a spread operator newArray=[...[2,5,7], 10] - gets rid of internal brackets sort of - can also be used with objects
    let newArray = [...array1, number];
    console.log('array version 2', newArray);
    
  })

  handleClickObject = ()=>{
    console.log('hello from object');
    const coder = {
      name: "Naomi",
      level: "Awesome!"
    }
    // coder.level = 'super Awesome!'
    console.log(coder);
    const updatedCoder = {...coder, level: 'Super Awesome', favoriteColor: 'green'};
    console.log(updatedCoder);
  }

  render() {
    return (
      <>
          <button onClick={this.handleClick}>CLICK ME ARRAY</button>
          <br></br>
          <button onClick={this.handleClickObject}>CLICK ME OBJECT</button>
          <input onChange = {this.handleChange}></input>
          <p>react is new</p>
          <p>{this.state.inputValueTwo}</p>
          <p>{this.state.inputValue}</p>
      </>
    );
  }
}

export default Information;
