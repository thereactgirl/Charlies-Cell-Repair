import React from "react";
import { Container, Button, Alert } from 'reactstrap';

class Navigation extends React.Component{
    state = {
        visible: false
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
                    <Button color="secondary" active={true} onClick={this.toggle.bind(this)}>About</Button>
                    <Button color="secondary" active={true} onClick={this.toggle.bind(this)}>Services</Button>
                    <Button color="secondary" active={true} onClick={this.toggle.bind(this)}>Contact</Button>
                    <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}> Sorry! That page is still being built.</Alert>
                </nav>
            </div>
        )
    }
} 

export default Navigation;