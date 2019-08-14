import React, {Component} from 'react';
import ToolBar from './ToolBar';
import TodayMenu from './TodayMenu';
import ProjectsMenu from './ProjectsMenu';
import '../../css/SideBar.css';

interface Props {
    createNoteFunction?: any
}

class SideBar extends Component<Props> {
    sendCreateBool:any = (visible: boolean) => {
        this.props.createNoteFunction(visible)
    }

    render() {
        return(
            <div className="sideBar">
                <ToolBar createNoteFunction={ this.sendCreateBool }/>
                <div className="sideBarContent">
                    <TodayMenu/>
                    <ProjectsMenu/>
                </div>
            </div>
        );
    }
}

export default SideBar;