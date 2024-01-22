import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        };
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1
                    className='f1'
                    link
                    href='https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap'
                    rel='stylesheet'
                >
                    ROBOFRIENDS
                </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
export default App;
