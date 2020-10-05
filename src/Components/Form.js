import React, { Component } from 'react';

class Form extends Component {

    state = {
        name : '',
        qty : ''
    }

    hadleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    hadleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name : '',
            qty : ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.hadleSubmit}>
                    <p>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.hadleChange} />
                    </p>
                   <p>
                   <label htmlFor="qty">Quantity : </label>
                    <input type="text" name="qty" value={this.state.qty} onChange={this.hadleChange} />
                   </p>
                   <p>
                       <button>Submit</button>
                   </p>
                </form>
            </div>
        );
    }
}

export default Form;