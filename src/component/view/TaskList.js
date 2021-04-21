import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class TaskList extends Component {
    render() {
        return (
            <div>
                <Button variant ="contained" color="primary">Primario</Button>
                <Button variant ="contained" color="secondary">Secundario</Button>
            </div>
        );
    }
}

export default TaskList;