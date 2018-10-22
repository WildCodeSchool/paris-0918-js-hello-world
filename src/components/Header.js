import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Grid } from '@material-ui/core';
import Form from './Form';
import ButtonClose from './ButtonClose';
import ButtonContact from './ButtonContact';

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: '#F3F8FF',
        [theme.breakpoints.up('xs')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('sm')]: {
            width: '50vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '40vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw'
        },
    },
    titleContact: {
        color: '#5883b5'
    },
    header: {
        backgroundColor: '#7FBAFF',
        color: '#FFF',
        textAlign: 'center',
        padding: 10
    },
    logo: {
        maxWidth: '60vw',
        maxHeight: '8vh',
        [theme.breakpoints.up('md')]: {
            marginLeft: '17vw',
        },
    }
});

class Header extends Component {
    state = {
        open: false,
    };

    handleToggle = () => this.setState({ open: !this.state.open })
    handleClose = () => this.setState({ open: false });

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    wrap='nowrap'
                >
                    <Grid item xs={10}>
                        <img className={classes.logo} src={require('../images/Logo.svg')} alt="Logo" />
                    </Grid>
                    <Grid item xs={2}
                        onClick={this.handleToggle}>
                        <ButtonContact />
                    </Grid>
                </Grid>
                <Drawer
                    docked="false"
                    anchor="right"
                    open={this.state.open}
                >
                    <div className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >
                            <Grid>
                                {<h1 className={classes.titleContact}>Contact US</h1>}
                            </Grid>
                            <Grid item className={classes.button} onClick={this.handleClose}>
                                <ButtonClose
                                    open={this.state.open}
                                />
                            </Grid>
                            <Grid item>
                                <Form />
                            </Grid>
                        </Grid>
                    </div>
                </Drawer>
            </div >
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);





// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> HELLO WORLD</h1>
//             </div>
//         );
//     }
// }