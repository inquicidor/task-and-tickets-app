import React, { Component } from 'react';
import {Toolbar, Typography} from '@material-ui/core'; 
import {withStyles} from '@material-ui/styles';
import {IconButton} from '@material-ui/core';

const styles = theme =>({
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")]:{
            display:"flex"
        }

    },
    grow:{
        flexGrow:1
    },
    sectionMobile:{
        display:"flex",
        [theme.breakpoints.up("md")]:{
            display:"none"
        }

    }
});

class BarSession extends Component {
    render() {
        const{classes} = this.props;

        return (
            <div>
                <Toolbar>
                    <IconButton color = "inherit">
                        <i className="material-icons">menu</i>
                    </IconButton>
                    <Typography variant="h6">
                        Task Home
                    </Typography>
                    <div className = {classes.grow}>
                    </div>
                    <div className = {classes.sectionDesktop}>
                        <button color="inherit">Login</button>
                    </div>
                    <div className = {classes.sectionMobile}>
                        <IconButton color = "inherit">
                            <i className="material-icons">more_vert</i>
                        </IconButton>
                    </div>
                </Toolbar>
            </div>
        );
    }
}

export default withStyles(styles)(BarSession);