import React from 'react';
import Entries from './Entries';

const EntryList = (props) => {
    const {entries} = props;
    const mapAll = () => {
        return entries.mapAll((entries) => (
            <Entries
            entries={entries}
            key={entries.journal_entry_id}
            onSelectEntryCallBack={props.onSelectEntryCallBack}
            />
        ))
    }

return (
    <section>
        {mapAll}
    </section>
);};

export default EntryList;
