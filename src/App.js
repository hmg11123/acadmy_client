import React from 'react';
import { MenuBar } from './layouts';
import { Route } from 'react-router-dom';
import { ACSC00, ACSC01, ACSC02, ACSC03, ACSC04 } from './screens';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <MenuBar />
                </header>
                <main>
                    <Route exact path="/" component={ACSC00}></Route>
                    <Route exact path="/about" component={ACSC01}></Route>
                    <Route exact path="/info" component={ACSC02}></Route>
                    <Route exact path="/notice" component={ACSC03}></Route>
                    <Route exact path="/contact" component={ACSC04}></Route>
                </main>
            </div>
        );
    }
}

export default App;
