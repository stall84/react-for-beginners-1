import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header mainLine="Fresh Seafood Market" secondLine="Doing Fishy Work" age={36} />
                </div>
                  <Order />
                  <Inventory />
               
            </div>
        )
    }
}

export default App;
