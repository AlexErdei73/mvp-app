import 'firebase/database';
import { ref } from 'firebase/database';
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
        console.log('patients: ', patients);
        return (<Patients patients={patients}/>);
    }
}
 
export default ShowData;