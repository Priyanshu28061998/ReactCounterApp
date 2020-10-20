import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        //console.log(this.props);
        return (
            <div>
            <span className={this.getBadge()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Press Me</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
        
    }

    getBadge(){
        let classes="badge m-2 badge-"
        if(this.props.counter.value===0)
        {
            classes=classes+"warning";
        }
        else
        {
            classes=classes+"primary";
        }
        return classes;
    }
    formatCount(){
        return this.props.counter.value === 0 ? "Zero": this.props.counter.value;
    }
}
 
export default Counter;