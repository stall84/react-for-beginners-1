import React from 'react';

// Stateless functional component
                // using ES6 destructuring of props and implicit return with arrow function
const Header = ({ mainLine, secondLine, age }) => (
        <header className="top">
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>  
                </span>
                Day
            </h1>
            <h3 className="tagline">
            <span>{mainLine}</span>
        </h3>
        </header>                           
)






// Classic react component

// class Header extends React.Component {
//     render() {
//         return (
//                 <header className="top">
//                     <h1>
//                         Catch 
//                         <span className="ofThe">
//                             <span className="of">Of</span>
//                             <span className="the">The</span>  
//                         </span>
//                         Day
//                     </h1>
//                     <h3 className="tagline">
//                     <span>{this.props.mainLine}</span>
//                 </h3>
//                 </header>                           
//         )
//     }
// }

export default Header;