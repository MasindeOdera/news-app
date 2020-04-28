import React, { Component } from 'react';
import fakeNews from '../gif/fakeNews.gif';

export class FakeNews extends Component {
    render() {
        return (
            <div>
                <h3 style={{margin: '4px',}}>Fake news? Find out for yourself.</h3>
                <img 
                    src={fakeNews}
                    style={{ width: '60%', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />     
            </div>
        )
    }
}

export default FakeNews
