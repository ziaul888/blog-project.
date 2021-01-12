import React, {Component} from 'react'
import {Navbar,Nav,} from 'react-bootstrap';
import whitelogo from '../../asset/image/navlogo.svg'
import bluelogo from '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {NavLink} from "react-router-dom"



 class TopNavigation extends Component {
  
    constructor(){
        super();
        this.state={
            navbarTitle:"navTitle",
            navlogo :[whitelogo],
            navbarBack:"navBackground",
            navbarItem:"navItem"

        }
    }

    onScroll=()=>{
     if (window.scrollY >100){
         this.setState({
            navbarTitle:"navTitleScroll",
             navlogo:[bluelogo],
             navbarBack:"navBackgroundScroll",
             navbarItem:"navItemScroll"

         })
     } else if( window.scrollY < 100){
         this.setState({
             navbarTitle:"navTitle",
             navlogo:[whitelogo],
             navbarBack:"navBackground",
             navbarItem:"navItem"

         })
     }  
    }

    componentDidMount(){
        window.addEventListener("scroll", this.onScroll)
    }

render() {
return (
<>
    <Navbar  fixed="top"  collapseOnSelect expand="lg"  variant="dark" className={this.state.navbarBack}>
        <Navbar.Brand className={this.state.navbarTitle}  href="#home" > <img src={this.state.navlogo} alt="img"/> LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link> <NavLink  exact activeStyle={{color:'#00a8ee'}} to="/" className={this.state.navbarItem}>HOME</NavLink></Nav.Link>
                <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} to="/services" className={this.state.navbarItem}>SERVICES</NavLink></Nav.Link>
                <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} to="/course" className={this.state.navbarItem}>COURSES</NavLink></Nav.Link>
                <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} to="/portfolio" className={this.state.navbarItem}>PORTFOLIO</NavLink></Nav.Link>
                <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} to="/contact" className={this.state.navbarItem}>CONTACT</NavLink></Nav.Link> 
                <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} to="/about" className={this.state.navbarItem}>ABOUT</NavLink></Nav.Link> 
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</>
)
}
}

export default TopNavigation