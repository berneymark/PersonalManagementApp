import React, {Component} from 'react';
import '../../css/SideBar.css';

interface Props {
    projectName: string;
}

class Project extends Component<Props> {
    render() {
        return( <p className="project">{this.props.projectName}</p> );
    }
}

export default Project;