import React from "react";
import { Container, Button, Alert } from 'reactstrap';

class Navigation extends React.Component{
    state = {
        visible: true
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return (
            <div>
                <h1>CPR</h1>
                <nav>
                    <Button color="secondary" active={true}>Home</Button>
                    <Button color="secondary" active={true}>About</Button>
                    <Button color="secondary" active={true}>Services</Button>
                    <Button color="secondary" active={true}>Contact</Button>
                    <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}> Hi! I am am alert.</Alert>
                </nav>
            </div>
        )
    }
} 

export default Navigation;