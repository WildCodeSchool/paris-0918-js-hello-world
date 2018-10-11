import React, { Component } from 'react';
import IconLabelButtons from './ButtonSend';
import TextFields from './Form';



class Contact extends Component {
    render() {
        return (
            <div>
                <TextFields />
                <IconLabelButtons />
            </div>
        );
    }
    
}

export default Contact;



