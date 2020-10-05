import React, { Component } from 'react';
import Form from './Form';

class FormList extends Component {

    state = {
        item: [
            { name: "Eggs", qty: "2 Dozzen" },
            { name: "Milk", qty: "2 Liter" },
        ]
    }

    renderItem = () => {
        return (
            <ul>
                {this.state.item.map(item => <li key={item.name}>{item.name} {item.qty}</li>)}
            </ul>
        )
    }

    addItem = (newItem) => {
        this.setState({
            item : [...this.state.item, newItem]
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderItem()}
                </ul>
                <Form addItem={this.addItem} />
            </div>
        );
    }
}

export default FormList;