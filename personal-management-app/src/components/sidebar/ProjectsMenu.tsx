import React, {Component} from 'react';
import Project from './Project';
import '../../css/SideBar.css';

class ProjectsMenu extends Component {
    addProject = () => {
        console.log("New project added");
    }

    render() {
        return(
            <div className="projectsMenu">
                <h1>projects</h1>
                <button 
                    className="addProject"
                    onClick={this.addProject}>+
                </button>
            </div>
        );
    }
}

export default ProjectsMenu;