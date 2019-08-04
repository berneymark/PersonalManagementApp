import React, {Component} from 'react';
import '../../css/SideBar.css';

interface Props {
    projectName: string;
}

class Project extends Component<Props> {
    render() {
        return(
            <div className="project">
                <p>{this.props.projectName}</p>
            </div>
        );
    }
}

export default Project;