const Entries = (props) => {
    const {entries} = props;
    console.log('data passed: ', entries);
    return (
        <div onClick = {() => props.onSelectEntryCallBack(entries)}>
            <h3>
                {entries.journal_entry_id}. {entries.journal_text}
            </h3>
        </div>
    );
};

export default Entries;

