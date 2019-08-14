import React, {Component} from 'react';
import ToolBar from './ToolBar';
import TodayMenu from './TodayMenu';
import ProjectsMenu from './ProjectsMenu';
import '../../css/SideBar.css';

interface Props {
    createNoteFunction?: any
}

class SideBar extends Component<Props> {
    render() {
        return(
            <div className="sideBar">
                <ToolBar createNoteFunction={ this.props.createNoteFunction }/>
                <div className="sideBarContent">
                    <TodayMenu/>
                    <ProjectsMenu/>
                </div>
            </div>
        );
    }
}

export default SideBar;