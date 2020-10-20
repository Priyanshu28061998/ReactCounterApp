import React, { Component } from 'react';
import Counters from "./Components/counters";
import Navbar from "./Components/navbar";
import './App.css';
import Counter from './Components/counter';

class App extends Component {
  state = {
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
}

handleDelete = (counterID) =>{
    //console.log("Handle Delete",counterID);
    const counters=this.state.counters.filter(c => c.id!=counterID);
    this.setState({counters:counters});
};

handleReset = () =>{

    const counters=this.state.counters.map(c => {
        c.value=0;
        return c;
    });
    this.setState({counters:counters});

}

handleIncrement = (counter) =>{
    const counters=[...this.state.counters];
    const index=this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters:counters});
}
  render(){
    return (
      <div>
        <Navbar totalCount={this.state.counters.filter(c => c.value>0).length}/>
        <Counters
        counter={this.state.counters}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
