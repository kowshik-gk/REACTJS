import React, { Component } from "react";
import './Style/style.css';

export class FromComponent extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevent form from submitting
        const { userName, email, password } = this.state;
        alert(`Username: ${userName}\nEmail: ${email}\nPassword: ${password}`);
    }

    render() {
        return (
            <form className="formClass" onSubmit={this.handleSubmit}>
                <h2>Enter Your Credentials</h2><br />
                <input
                    type="text"
                    id="name"
                    name="userName"
                    placeholder="Username"
                    value={this.state.userName}
                    onChange={this.handleChange}
                /><br /><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                /><br /><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br /><br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
