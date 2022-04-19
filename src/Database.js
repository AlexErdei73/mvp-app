import 'firebase/database';
import { getDatabase } from 'firebase/database';
import * as React from 'react';
import { DatabaseProvider, useFirebaseApp } from 'reactfire';
import ShowData from './ShowData';

const Database = () => {
    const firebaseApp = useFirebaseApp();
    const database = getDatabase(firebaseApp);

    return ( 
    <DatabaseProvider sdk={database}>
        <ShowData />
    </DatabaseProvider> 
    );
}
 
export default Database;