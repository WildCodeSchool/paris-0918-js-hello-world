import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#7FBAFF"
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });
  function BoutonEnter(props){
    const {classes, travel} = props;
    return (
        <div>
            <Button onClick = {travel} variant="contained" color="primary" className={classes.button}> 
            <img width={"20px"} height={"20px"} src={require('../images/Enter.svg')} alt="shuffle"/> </Button>
        </div> 
    )
}

  BoutonEnter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BoutonEnter);

