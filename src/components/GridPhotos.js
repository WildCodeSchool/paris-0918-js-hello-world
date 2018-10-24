import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '50%',
  },
  subheader: {
    width: '100%',
  },
});

function ImageGridList(props) {
  const { classes, photos } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {photos.map(photo => (
          <GridListTile key={photo.largeImageURL} cols={1}>
            <img src={photo.largeImageURL} alt={photo.title} />
            {/* <img src={photo.link} alt={photo.title} /> */}

          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
