import React, {MouseEventHandler, MouseEvent, useState} from "react";
import Note from "../note/note";
import './note-view-component.css'

interface NoteViewComponentProps {
    Note: Note;
    OnDeleteNote: MouseEventHandler<HTMLButtonElement>
}

const NoteViewComponent: React.FC<NoteViewComponentProps> = (props) => {

    const [className, setClassName] = useState('');

    const onChangeBackground = (event: MouseEvent<HTMLLIElement>) => {
        if (event) {
            setClassName("highlight");
        }
    }

    const onRemoveBackground = (event: MouseEvent<HTMLLIElement>) => {
        if (event) {
            setClassName("");
        }
    }

    return <li className={className} onMouseOver={onChangeBackground} onMouseOut={onRemoveBackground}>
    <span>{props.Note.Message}</span>
    <span>Created: {props.Note.Created.toString()}</span>
    <button type="submit" onClick={props.OnDeleteNote}>Delete</button>
    </li>
}

export default NoteViewComponent;