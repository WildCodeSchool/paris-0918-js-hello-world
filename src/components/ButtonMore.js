import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import More from '@material-ui/icons/AddCircle';


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

class ButtonMore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Button className={classes.button} mini variant="fab" color="primary">
                <More className={classes.icon}/>
            </Button>
        );
    }

}

export default withStyles(styles)(ButtonMore);