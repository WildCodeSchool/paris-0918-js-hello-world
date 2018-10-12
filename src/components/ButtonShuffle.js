import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Shuffle from '@material-ui/icons/Shuffle';


const styles = {
    button: {
        backgroundColor: '#5883b5',
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
        const { classes } = this.props;
        return (
            <Button className={classes.button} variant="flat" color="primary">
                <Shuffle className={classes.icon}/>
            </Button>
        );
    }

}

export default withStyles(styles)(ButtonShuffle);