import React from 'react';

//Creating a Home class and marked for export
export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcom to the home page</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}