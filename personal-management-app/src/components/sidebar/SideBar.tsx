import React, {Component} from 'react';
import ToolBar from './ToolBar';
import TodayMenu from './TodayMenu';
import '../../css/SideBar.css';

class SideBar extends Component {
    render() {
        return(
            <div className="sideBar">
                <ToolBar/>
                <div className="sideBarContent">
                    <TodayMenu/>
                    <h1>projects</h1>
                </div>
            </div>
        );
    }
}

export default SideBar;