import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {

    handleClick = () => {
        
    }

    render() {
        // Attempting to use ES6 destructuring to avoid having to use (this.props.details.image, this.props.details.desc, this.props... and so on)
        const {name, image, desc, price, status} = this.props.details;
        const isAvailable = status === 'available';

        return (
        <li className="menu-fish">

            <img src={image} alt={name} />
            <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
            </h3>
            <p>
                {desc}
            </p>
        <button onClick={() => {this.props.addToOrder(this.props.index);}} disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold Out'}</button>
                
        </li>
        )
    }
}

export default Fish;