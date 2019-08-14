import React, {Component} from 'react';

interface States {
    noteName: string;
    noteContent: string;
}

class CreateNoteForm extends Component<{}, States> {
    render() {
        return(
            <div className="createNoteContainer">
                <form></form>
            </div>
        );
    }
}

export default CreateNoteForm;