import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class NewGroceryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {item: '', qty: '', addItem: true, addQty: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
    }
    handleItem(evt) {
        evt.preventDefault();
        this.setState({
            addItem: false,
            addQty: true
        })
    }
    handleQuantity(evt) {
        evt.preventDefault();
        this.props.addGrocery(this.state.item, this.state.qty, uuidv4());
        this.setState({
            item: '',
            qty: '',
            addQty: false,
            addItem: true
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        let result;
        if (this.state.addItem) {
            result = <form onSubmit={this.handleItem} style={{marginBottom: "40px"}}>
                <input 
                    type="text" 
                    name="item" 
                    value={this.state.item}
                    onChange={this.handleChange} 
                    placeholder="Add your item to the list"
                />
                <button>Add Item</button>
            </form>
        }
        if (this.state.addQty) {
            result = <form onSubmit={this.handleQuantity} style={{marginBottom: "40px"}}>
            <input 
                type="text" 
                name="qty" 
                value={this.state.qty}
                onChange={this.handleChange} 
                placeholder="0 items to be added"
            />
            <button>Add Quantity</button>
        </form>
        }
        return result;
    }
}

export default NewGroceryItem;