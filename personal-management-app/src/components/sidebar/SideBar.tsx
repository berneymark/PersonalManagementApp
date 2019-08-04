import React, {Component} from 'react';
import ToolBar from './ToolBar';
import TodayMenu from './TodayMenu';
import ProjectsMenu from './ProjectsMenu';
import '../../css/SideBar.css';

class SideBar extends Component {
    render() {
        return(
            <div className="sideBar">
                <ToolBar/>
                <div className="sideBarContent">
                    <TodayMenu/>
                    <ProjectsMenu/>
                </div>
            </div>
        );
    }
}

export default SideBar;