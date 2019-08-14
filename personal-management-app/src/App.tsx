import React, {Component} from 'react';
import SideBar from './components/sidebar/SideBar';
import CreateNoteForm from './components/notes/CreateNoteForm';
import './App.css';

interface States {
  isNoteFormVisible?: boolean
}

class App extends Component<{}, States> {
  constructor(p: {}) {
    super(p);
    this.state = {
      isNoteFormVisible: false
    }

    this.createNoteForm = this.createNoteForm.bind(this);
  }

  createNoteForm = (visible: boolean) => {
    this.setState({
      isNoteFormVisible: visible
    });
  }

  render() {
    let notePanel;

    if (this.state.isNoteFormVisible === true) {
      notePanel = <CreateNoteForm/>
    } else if (this.state.isNoteFormVisible === false) {
      notePanel = <h1>empty</h1>
    } else if (this.state.isNoteFormVisible === null) {
      notePanel = <h1>null</h1>
    }

    return (
      <div className="parentContainer">
        <div className="sideBar">
          <SideBar createNoteFunction={ this.createNoteForm }/>
        </div>
        <div className="notesView">
          { notePanel }
        </div>
      </div>
    );
  }
}

export default App;
