import 'firebase/database';
import { ref } from 'firebase/database';
import { useState } from 'react';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Container, Grid, Typography } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  createTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import MomentUtils from "@date-io/moment";
import PatientCard from "./PatientCard";
import SelectPatient from './SelectPatient';

const Patients = (props) => {
    const { patients } = props;
    const [index, setIndex] = useState(0);

    const useStyles = makeStyles(theme => ({
        root: {
          margin: theme.spacing(6, 0, 3)
        },
        header: {
          margin: theme.spacing(1)
        },
        body: {
          display: "flex",
          justifyContent: "center",
          margin: theme.spacing(1)
        }
      }));
      
      // Create a theme instance.
      const theme = createTheme({
        palette: {
          primary: {
            light: lightBlue[300],
            main: lightBlue[500],
            dark: lightBlue[900],
            contrastText: "#FFF"
          },
          secondary: {
            light: lightBlue[300],
            main: lightBlue[500],
            dark: lightBlue[900],
            contrastText: "#FFF"
          },
          background: {
            default: "#f9f9f9"
          }
        }
      });

    const classes = useStyles();

    const entry = `records/${patients[index].entry}`;
    const database = useDatabase();
    const patientRef = ref(database, entry);

    const { status, data: patient } = useDatabaseObjectData(patientRef);
    if (status==="loading") {
        return (
            <div>...loading</div>
        )
    } else {
        console.log('patient: ', patient);
        return ( 
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Container>
                <SelectPatient 
                  patients={patients}
                  index={index}
                  setIndex={setIndex}
                />
                <div className={classes.body}>
                  <Grid container spacing={3} direction="row" justifyContent="center">
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom align="center">
                        Patient Card
                      </Typography>
                      <PatientCard patient={patient} />
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        );
    }
}
 
export default Patients;