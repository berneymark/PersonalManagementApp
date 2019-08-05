import React, {Component} from 'react';
import '../../css/SideBar.css';

interface Props {
    projectName: string;
    projectLink?: string;
}

class Project extends Component<Props> {
    render() {
        return( 
            <button className="projectButton">
                <p className="projectName">
                    { this.props.projectName }
                </p>
            </button> 
        );
    }
}

export default Project;