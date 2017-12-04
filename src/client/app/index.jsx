import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Hello React project </p>;
    }
}

class StoryBox extends React.Component {
    render () {
        return (
            <div>
                <h3>Stories App</h3>
                <p>Sample paragraph </p>    
            </div>
        );
    }
}

//render(<App/>, document.getElementById('app'));
render(<StoryBox/>, document.getElementById('story-app'));