import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    // Setting up our State for whole app, all components. Starting with initial-state
    // State can be set on the constructor method with 'super().. state = {}' or via a property

    state = {
        fishes: {},
        order: {}
    }

    // You can't add items from creating/pulling component (in this case the AddFishForm), you have to add items in from 
    // the same location state is created.. so that's here in App
    // We will need to run this addFish method from AddFishForm. The way you get this method that's in/on App.js
    // down two levels deep on AddFishForm.js is by passing it in props down (drilling) to the child component. Remember AddFishForm lives inside Inventory, so pass it to 
    // Inventory's props, then go into Inventory and pass it down one more level to AddFishForm

    addFish = (fish) => {     
    // 1. Take a copy of the existing state to avoid mutation/altering state directly. The way you'll take a copy of the fishes object inside State is by
    //  spreading it into a new variable (also 'fishes'). Afterwhich you must use React's setState API, you can't just add to the object via
    // vanilla javascript (ie this.state.fishes.fish1 = fish : won't work)
    const fishes = {...this.state.fishes}
    // then add our new fish obj to that copied variable. using Date.now to represent the diferentiating key
    fishes[`fish${Date.now()}`] = fish;
    // Finally we want to set state to our newly updated fishes object (copy back). Use the builtin method setState, set the state value you want (fishes) to the 
    // Just made/updated input data/obj (also fishes in this case). ES6 allows writing only once if key is exact same as value. so (fishes: fishes) could be just (fishes)
    this.setState({
        fishes: fishes
    })
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    }

    addToOrder = (fish) => {
        // 1) Take another copy of state
        const order = { ...this.state.order }
        // 2) Either add to order or update the order
        order[fish] = order.fish1 + 1 || 1;
        // 3) Call set state to update the state order object
        this.setState({ order });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header mainLine="Fresh Seafood Market" secondLine="Doing Fishy Work" age={36} />
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(fish => <Fish key={fish} index={fish} details={this.state.fishes[fish]} addToOrder={this.addToOrder} />)}
                        </ul>
                </div>
                {/* Using object spread of state to pass it into Order via props Although if you have a lot of items in state that you are not using
                in the component you're passing down to, you should use specific (fishes={this.state.fishes} order={this.state.order} syntax
                in this case though we're using both properties of our state in the order component */}
                  <Order {...this.state} />
                  <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
               
            </div>
        )
    }
}

export default App;
