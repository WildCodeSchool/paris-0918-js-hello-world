import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Contact from '@material-ui/icons/Message';


const styles = {
    button: {
        color: '#FFF',
        border: '#FFF',
        "&:hover": {
            backgroundColor: '#5883b5',
            opacity: '0.2'
        }
    },
    icon: {
        color:'#FFF'
    },
};

class ButtonShuffle extends Component {
    render() {
        const { classes, clique } = this.props;
        return (
            <Button onClick={clique} className={classes.button} variant="outlined" color="primary">
                <Contact className={classes.icon}/>
            </Button>
        );
    }

}

export default withStyles(styles)(ButtonShuffle);