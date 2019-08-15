import React, {Component} from 'react';

interface States {
    noteTitle: string;
    noteContent: string;
}

class CreateNoteForm extends Component<{}, States> {
    submitNote = () => {
        
    }

    render() {
        return(
            <div className="createNoteContainer">
                <form onSubmit={ this.submitNote }>
                    <input 
                        type="text"
                        name="noteTitle"
                        placeholder="note title"></input>
                    <select name="projectSelector">
                        <option>University</option>
                        <option>Work</option>
                        <option>Personal</option>
                        <option>Urgent</option>
                    </select>
                    <button
                        type="submit"
                        name="noteSubmit">
                        Create Note
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateNoteForm;