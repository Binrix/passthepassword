import React from "react";
import Entry from "./entry.type";
import { ScrollView } from "react-native";
import { EntryCard } from "./Entry";

export type EntryListProps = {
    entries: Entry[]
}

export const EntryList: React.FC<EntryListProps> = ({
    entries
}) => {
    return (
        <ScrollView>
            {entries.map(entry => {
                return <EntryCard entry={entry}></EntryCard>
            })}
        </ScrollView>        
    );
}