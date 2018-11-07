import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
  placeholder: {
    marginTop: '20%',
    height: 100,
  },
  circle: {
    color: '#5883b5',
    animationDuration: '1000ms',
  },
});

class Loader extends React.Component {
  state = {
    loading: true,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.placeholder}>
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress
              variant="indeterminate"
              className={classes.circle}
              size={40}
              thickness={5}
            />
          </Fade>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);