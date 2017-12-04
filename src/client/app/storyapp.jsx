import React from 'react';
import {render} from 'react-dom';

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

render(<StoryBox/>, document.getElementById('story-app'));