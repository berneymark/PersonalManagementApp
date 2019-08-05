import React, {Component} from 'react';
import '../../css/SideBar.css';

interface Props {
    projectName: string;
    projectLink?: string;
}

class Project extends Component<Props> {
    render() {
        return( 
            <a href={ this.props.projectLink }>
                <p className="project">
                    { this.props.projectName }
                </p>
            </a> 
        );
    }
}

export default Project;