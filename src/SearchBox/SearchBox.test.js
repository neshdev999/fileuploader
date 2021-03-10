import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

describe('SearchBox component', () => {
    it('should end without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<SearchBox />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});