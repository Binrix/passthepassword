import { Card, Text } from "@rneui/base";
import { StyleSheet } from "react-native";
import Entry from "./entry.type";

export type EntryCardProps = {
    entry: Entry
}

export const EntryCard: React.FC<EntryCardProps> = ({
    entry
}) => {
    return (
        <Card containerStyle={styles.card} >
            <Card.Title>{entry.nameOfWebsite}</Card.Title>
            <Card.Divider />
            <Text>{entry.url}</Text>
            <Text>{entry.username}</Text>
            <Text>{entry.password}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 200,
    }
});