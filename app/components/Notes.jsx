import React from 'react';
import Note from './Note.jsx';

export default ({notes}) => {
    return (
        <ul>
            {
                notes.map((notes) =>
                    <li key={notes.id}>
                    <Note task={notes.task} />
                    </li>
                )
            }
        </ul>
    );
}
