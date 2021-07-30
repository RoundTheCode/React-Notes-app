import React, { useState, ChangeEvent, MouseEvent } from "react";
import Note from "../note/note";
import NoteViewComponent from "./note-view-component";
import './note-listing-component.css'

interface NoteListingComponentProps {
    Notes: Note[];
}
const NoteListingComponent: React.FC<NoteListingComponentProps> = (props) => {

    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState(props.Notes);

    const onCreateNote = (event: MouseEvent<HTMLButtonElement>) => {
        if (event) {
            event.preventDefault();

            /*
            var comingDate = new Date();

            comingDate.setSeconds(comingDate.getSeconds() + 2);

            while (comingDate > new Date()) {

            }
            */

            setNotes([...notes, new Note(newNote)]);
            setNewNote("");
        }
    }

    const onCreateNoteAsync = async(event: MouseEvent<HTMLButtonElement>) => {
        if (event) {
            event.preventDefault();

            await new Promise(resolve => setTimeout(resolve, 2000));

            setNotes([...notes, new Note(newNote)]);
            setNewNote("");
        }
    }

    const onDeleteNote = (event: MouseEvent<HTMLButtonElement>, index: number) => {
        if (event) {
            event.preventDefault();

            setNotes(notes.filter((note, noteIndex) => noteIndex != index));
        }
    }

    const onNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event && event.target) {
            setNewNote(event.target.value);
        }
    }

    return <>
        <div className="col-6">
        <h2>Enter your note</h2>
        <fieldset>
            <label htmlFor="Comment">
                <textarea id="Comment" onChange={onNoteChange} cols={50} rows={6} value={newNote}></textarea>
            </label>
        </fieldset>
        <button type="submit" onClick={onCreateNote}>Submit</button>
        </div>
        <div className="col-6">
            <h2>Your saved notes</h2>
            {notes && notes.length > 0 ? (
            <ul>
                {notes.map((note: Note, index: number) => {
                    return <NoteViewComponent key={`Note`+index} Note={note} OnDeleteNote={(event) => onDeleteNote(event, index)}></NoteViewComponent>
                })}
            </ul>    
            ) : (
                <p>You currently do not have any saved notes.</p>
            )}
        </div>
    </>
}
export default NoteListingComponent;