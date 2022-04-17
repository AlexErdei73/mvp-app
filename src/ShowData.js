import 'firebase/database';
import { ref, query, orderByChild, push, set, increment as rtdbIncrement } from 'firebase/database';
import * as React from 'react';
import { useDatabase, useDatabaseListData, useDatabaseObjectData, useFirebaseApp, useUser } from 'reactfire';

const ShowData = () => {
    const database = useDatabase();
    const recordsRef = ref(database, "records");
    const { status, data: records } = useDatabaseListData(recordsRef);
    if (status==="loading") {
        return (
            <div>...loading</div>
        );
    } else {
        console.log(records);
        return ( <></> );
    }
}
 
export default ShowData;