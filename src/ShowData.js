import 'firebase/database';
import { ref } from 'firebase/database';
import * as React from 'react';
import { useDatabase, useDatabaseListData } from 'reactfire';
import Patients from './Patients';

const ShowData = () => {
    const database = useDatabase();
    const patientsRef = ref(database, "patients");
    const { status, data: patients } = useDatabaseListData(patientsRef);
    if (status==="loading") {
        return (
            <div>...loading</div>
        );
    } else {
        console.log(patients);
        return (<Patients patients={patients} index={2}/>);
    }
}
 
export default ShowData;