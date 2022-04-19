import { Box, TextField, MenuItem } from '@material-ui/core';

const SelectPatient = (props) => {
    const { patients, index, setIndex } = props;

    const handleChange = (event) => {
        setIndex(event.target.value);
    };

    return ( 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="select-patient-name"
          select
          label="Patient Name"
          value={index}
          onChange={handleChange}
          helperText="Please select the patient's name"
        >
          {patients.map((patient, index) => (
            <MenuItem key={index} value={index}>
              {patient.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    );
}
 
export default SelectPatient;