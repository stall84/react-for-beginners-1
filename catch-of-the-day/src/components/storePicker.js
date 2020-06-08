import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log('Going to Store')
    }

    render() {
        return (
            <React.Fragment>

        <form className="store-selector" onSubmit={this.goToStore}>
            <h2> Please Select A Store </h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
            <button type="submit">Visit Store -></button>
        </form>
            
            </React.Fragment>
        )
    }
}

export default StorePicker;