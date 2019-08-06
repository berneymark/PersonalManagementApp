import React, {Component} from 'react';
import Note from './Note';

interface Props {
    projectGroup: string
}

class NoteList extends Component<Props, {}> {
    render() {
        return(
            <div className="noteList">

            </div>
        );
    }
}

export default NoteList;