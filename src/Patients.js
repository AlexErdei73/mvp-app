import 'firebase/database';
import { ref } from 'firebase/database';
import * as React from 'react';
import { useDatabase, useDatabaseObjectData } from 'reactfire';

const Patients = (props) => {
    const { patients, index } = props;
    const entry = `records/${patients[index].entry}`;
    const database = useDatabase();
    const patientRef = ref(database, entry);

    const { status, data: patient } = useDatabaseObjectData(patientRef);
    if (status==="loading") {
        return (
            <div>...loading</div>
        )
    } else {
        console.log(patient);
        return ( 
        <div>Patient</div>
        );
    }
}
 
export default Patients;