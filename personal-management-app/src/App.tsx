import React from 'react';
import SideBar from './components/sidebar/SideBar';
import './App.css';
import CreateNoteForm from './components/notes/CreateNoteForm';

interface States {
  isNoteFormVisible?: boolean
}

class App extends React.Component<{}, States> {
  constructor(p: {}) {
    super(p);
    this.state = {
      isNoteFormVisible: false
    }

    this.createNoteForm = this.createNoteForm.bind(this);
  }

  createNoteForm = () => {
    this.setState({
      isNoteFormVisible: !this.state.isNoteFormVisible
    });

    var booool;

    this.state.isNoteFormVisible ? booool = "true" : booool = "false";

    alert({ booool });
  }

  render() {
    return (
      <div className="parentContainer">
        <div className="sideBar">
          <SideBar createNoteFunction={ this.createNoteForm }/>
        </div>
        <div className="notesView">
          { this.state.isNoteFormVisible ?
            <CreateNoteForm></CreateNoteForm> :
            null
          }
        </div>
      </div>
    );
  }
}

export default App;
