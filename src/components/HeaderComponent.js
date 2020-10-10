import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
           <div className="container">
               <Navbar light className="shad">
               <NavbarBrand className="mr-auto centered "href="/"><img src='assets/images/logo.jpg' height="240" width="350" alt='Logo' /></NavbarBrand>
              
               </Navbar>
           </div>
                   
              
        );
    }
}


export default Header;