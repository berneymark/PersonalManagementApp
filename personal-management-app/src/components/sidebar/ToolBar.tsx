import React, {Component} from 'react';
import CreateIcon from '../../img/round-create-24px@2x.png';
import '../../css/SideBar.css';

class ToolBar extends Component {
    render() {
        return(
            <div className="toolBar">
                <input 
                    name="search"
                    placeholder="search notes"/>
                <button className="createButton">
                    <img 
                        src={ CreateIcon }
                        alt="create"
                        className="createIcon"/>
                </button>
            </div>
        );
    }
}

export default ToolBar;