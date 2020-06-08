import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    // Bind custom methods we make to component's 'this'
    // by extending React's component's class constructor
    constructor() {
        // super to call on all of React.Component's base constructor setup
        super();
        // I hate what is about to follow: Bind each custom method to 'this'...
        this.goToStore = this.goToStore.bind(this);
        console.log('Gonna create a component')
    }

    // create empty ref to use in renders' input element
    myInput = React.createRef();
    // goToStore could also be defined as a property set equal to an arrow function to get around having to bind 'this' 
    // like above.. would look like goToStore = (event) => {event.preventDefault(); ...}
    goToStore(event) {
        // Stop form from refreshing/'submitting'
        event.preventDefault();
        // Get the text from user in input form (via ref)
        console.log(this.myInput.current.value);

        
    }

    render() {
       
        return (
            <React.Fragment>

        <form className="store-selector" onSubmit={this.goToStore}>
            <h2> Please Select A Store </h2>
            <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()} 
            />
            <button type="submit">Visit Store -></button>
        </form>
            
            </React.Fragment>
        )
    }
}

export default StorePicker;