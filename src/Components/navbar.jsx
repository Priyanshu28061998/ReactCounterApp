import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( 
            <div>
            <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar<span className=" m-2 badge badge-pill badge-secondary">{this.props.totalCount}</span></a>
      </nav>
      
            </div>
      );
    }
}
 
export default Navbar;