import React, {Component, createRef} from 'react';
import '../../css/SideBar.css';

interface Props {
    projectName: string;
}

class Project extends Component<Props, {}> {
    private buttonRef = createRef<HTMLButtonElement>();

    onButtonClick = (event: any) => {
        console.log(this.props.projectName);
        let button = this.buttonRef.current;
        
    }

    render() {
        return(
            <button
                type="button"
                className="projectButton"
                ref={ this.buttonRef }
                onClick={ this.onButtonClick }>
                <p className="projectName">
                    { this.props.projectName }
                </p>
            </button> 
        );
    }
}

export default Project;