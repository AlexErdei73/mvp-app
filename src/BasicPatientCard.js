const BasicPatientCard = (props) => {
    const { patient } = props;
    const patientID = patient.id;
    const familyName = patient.name[0].family;
    const givenName = patient.name[0].given;
    const DOB = patient.birthDate;
    const gender = patient.gender;
    return (
    <>
        <div>Patient Id: {patientID}</div>
        <div><strong>Given Name: </strong>{givenName}</div>
        <div><strong>Family Name: </strong>{familyName}</div>
        <div><strong>Date Of Birth: </strong>{DOB}</div>
        <div><strong>Gender: </strong>{gender}</div>
    </>
    );
}
 
export default BasicPatientCard;