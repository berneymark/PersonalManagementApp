import React, {Component, createRef} from 'react';
import Project from './Project';
import '../../css/SideBar.css';

interface States {
    projectNames: string[];
    projectKeys: number[];
}

class ProjectsMenu extends Component<{}, States> {
    private projectRef = createRef<Project>();
    private pListRef = createRef<HTMLDivElement>();

    constructor(p: {}) {
        super(p);

        this.state = {
            projectNames: [],
            projectKeys: []
        }
    }

    addProjectButton = (event: any) => {
        let newProjectName = prompt("Input your project?");
        let currentKeys = this.state.projectKeys;

        if (newProjectName != null) {
            if (this.state.projectNames != null)
                this.selectProjectButton(null);
            let newProjectList = this.state.projectNames.concat(newProjectName);
            this.setState({
                projectNames: newProjectList
            });
        } else alert("That project can't be added");
    }

    addProjectComponent = () => {
        
    }

    selectProjectButton = (event: any) => {
        var projectList = document.getElementsByClassName("projectList");
    }

    render() {
        var count = 0;

        return(
            <div className="projectsMenu">
                <div className="projectsToolbar">
                    <h1>projects</h1>
                    <button onClick={ e => this.addProjectButton(e) }>+</button>
                </div>
                <div 
                    className="projectList"
                    ref={ this.pListRef }>
                    {this.state.projectNames.map(item => (
                        <Project 
                            ref={ this.projectRef }
                            key={ count++ } 
                            projectName={ item }/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProjectsMenu;