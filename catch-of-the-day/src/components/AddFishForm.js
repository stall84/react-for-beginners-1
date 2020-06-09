import React from 'react';

class AddFishForm extends React.Component {
    // Create Ref's
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // Using arrow function method to get around having to bind with constructor in this instance
    createFish = (event) => {
        // 1. Stop form from refreshing/submitting
        event.preventDefault();
        // 2. Store data to object from form
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            img: this.imageRef.current.value
        };
        // Pass our newly created fish object up 2 levels by giving it to the addFish method we've brought down via props
        this.props.addFish(fish);
        // Finally we want to refresh the form after it's submitted using the target of the event (the form) and built-in reset() method
        event.target.reset()
    }

    render() {
        return (
            
        <form className="fish-edit" onSubmit={this.createFish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
            <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
            <select name="status" ref={this.statusRef} >
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea name="desc" ref={this.descRef} placeholder="Desc" />
            <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
            <button type="submit">+ Add Fish</button>
            
        </form>
            



        )
    }
}

export default AddFishForm;
