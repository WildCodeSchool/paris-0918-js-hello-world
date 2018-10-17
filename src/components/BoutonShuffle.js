import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
import Shuffle from '@material-ui/icons/Shuffle';

const styles = theme => ({
    button: {
      // margin: theme.spacing.unit,
      // backgroundColor: "#7FBAFF"
      backgroundColor: '#5883b5',
        "&:hover": {
            backgroundColor: '#5883b5',
            opacity: '0.2'
        }
    },
    icon: {
      color:"#FFF"
    },
    // extendedIcon: {
    //   marginRight: theme.spacing.unit,
    // },
  });
  function BoutonShuffle(props){
      const {classes, travel} = props;
      return (
          <div>
              <Button onClick = {travel} variant="text" color="primary" className={classes.button}> 
              <Shuffle className={classes.icon}/></Button>
              {/* <img width={"20px"} height={"20px"} src={require('../images/shuffle.svg')} alt="shuffle"/> */}
          </div> 
      )
  }

  BoutonShuffle.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BoutonShuffle);

