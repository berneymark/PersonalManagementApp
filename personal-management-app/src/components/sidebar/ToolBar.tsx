import React, {Component} from 'react';
import CreateIcon from '../../img/round-create-24px@2x.png';
import '../../css/SideBar.css';

interface Props {
    createNoteFunction?: any
}

class ToolBar extends Component<Props> {
    onClick = () => {
        alert("is this button working?");
    }

    render() {
        return(
            <div className="toolBar">
                <input 
                    name="search"
                    placeholder="search notes"/>
                <button 
                    className="createButton"
                    onClick={ this.props.createNoteFunction }>
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