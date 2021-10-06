import React from 'react';
import { Card } from 'react-bootstrap';

//Creating a Create class and marked for export
export class Create extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the create page</h1>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>This is a card</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Bootstrap</Card.Subtitle>
                        <Card.Text>
                            Below example of linking back to pages
                        </Card.Text>
                        <Card.Link href="/">Home</Card.Link>
                        <Card.Link href="/read">Read</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}