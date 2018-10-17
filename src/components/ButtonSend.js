import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function IconLabelButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                Send
                <Icon className={classes.rightIcon}></Icon>
            </Button>
        </div>
    );
}    

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);

