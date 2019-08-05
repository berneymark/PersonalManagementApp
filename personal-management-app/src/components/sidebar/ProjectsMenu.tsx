import React, {Component} from 'react';
import Project from './Project';
import '../../css/SideBar.css';

interface States {
    projects: string[];
}

class ProjectsMenu extends Component<{}, States> {
    constructor(p: {}) {
        super(p);

        this.state = {
            projects: []
        }
    }

    addProject = (event: any) => {
        let newProject = prompt("Input your project?");
        console.log(newProject);

        if (newProject != null) {
            let newProjectList = this.state.projects.concat(newProject);
            this.setState({projects: newProjectList});
        } else alert("That project can't be added");
    }

    render() {
        return(
            <div className="projectsMenu">
                <div className="projectsToolbar">
                    <h1>projects</h1>
                    <button onClick={ e => this.addProject(e) }>+</button>
                </div>
                <div className="projectList">
                    {this.state.projects.map(item => (
                        <Project key={ item } projectName={ item }/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProjectsMenu;