import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { withStyles } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip';
import { Grid } from '@material-ui/core';
import SlideInfos from './SlideInfos';
import ButtonMore from './ButtonMore';
import ButtonLess from './ButtonLess';


const styles = theme => ({
  shadows: ['none'],
  root: {
    overflow: 'hidden',
  },
  worldMap: {
    [theme.breakpoints.up('xs')]: {
      height: '68vh',
      width: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      height: '67vh',
      width: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      height: '75vh',
      width: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
    },
  },
});


class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountryName: '',
      showSlide: false,
      zoomMap: 1,
    };
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  // Click on country
  handleGeographyClick = (geography) => {
    this.setState({
      selectedCountryName: geography.properties.name,
    });
  }

  // Double Click on country
  handleDoubleClick = () => {
    this.setState({
      showSlide: true,
    });
  };

  handleToUpdate = () => {
    this.setState({ showSlide: false });
  }

  // Zoom map
  handleZoomIn() {
    const { zoomMap } = this.state;
    if (zoomMap === 3.375) {
      this.setState({
        zoomMap: 3.375,
      });
    } else {
      this.setState({
        zoomMap: zoomMap * 1.5,
      });
    }
  }

  handleZoomOut() {
    const { zoomMap } = this.state;
    if (zoomMap === 1) {
      this.setState({
        zoomMap: 1,
      });
    } else {
      this.setState({
        zoomMap: zoomMap / 1.5,
      });
    }
  }


  render() {
    const { classes } = this.props;
    const { zoomMap, showSlide, selectedCountryName } = this.state;
    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          alignItems="flex-end"
          spacing={8}
        >
          <Grid item>
            <ComposableMap
              className={classes.worldMap}
              projectionConfig={{
                scale: 405,
              }}
            >
              <ZoomableGroup
                zoom={zoomMap}
              >
                {/* <Geographies geography={process.env.PUBLIC_URL + '/world-50m.json'}> */}
                <Geographies geography={require('../images/world-50m.json')}>

                  {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
                    <Geography
                      key={i}
                      data-tip={geography.properties.name}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: '#F3F8FF',
                          stroke: '#7FBAFF',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#7FBAFF',
                          stroke: '#7FBAFF',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#315681',
                          stroke: '##7FBAFF',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                      onClick={this.handleGeographyClick}
                      onDoubleClick={this.handleDoubleClick}
                    />
                  ))}
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip />
          </Grid>
          <Grid item onClick={this.handleZoomIn}>
            <ButtonMore />
          </Grid>
          <Grid item onClick={this.handleZoomOut}>
            <ButtonLess />
          </Grid>
        </Grid>
        <SlideInfos
          handleToUpdate={this.handleToUpdate}
          showSlide={showSlide}
          countryName={selectedCountryName}
        />
      </div>
    );
  }
}

export default withStyles(styles)(WorldMap);
