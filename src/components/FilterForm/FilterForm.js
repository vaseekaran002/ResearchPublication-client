import {
  FormControl,
  TextField,
  Grid,
  RadioGroup,
  Button,
} from "@material-ui/core";
import React from "react";
//import DatePicker from '@mui/x-date-pickers/DatePicker';
// import { DatePicker } from '@mui/x-date-pickers';

const FilterForm = () => {
  return (
    <FormControl>
      <Grid container>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Title" variant="outlined" />
          {/* <RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    /> */}
          {/* <Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    /> */}
          {/* <DatePicker
                    /> */}
          {/* <Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

          <div>
            <Button type="submit" text="Submit" />
            <Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </FormControl>
    //   <div>
    //   <form onSubmit={formik.handleSubmit}>
    //     <TextField
    //       fullWidth
    //       id="email"
    //       name="email"
    //       label="Email"
    //       value={formik.values.email}
    //       onChange={formik.handleChange}
    //       error={formik.touched.email && Boolean(formik.errors.email)}
    //       helperText={formik.touched.email && formik.errors.email}
    //     />
    //     <TextField
    //       fullWidth
    //       id="password"
    //       name="password"
    //       label="Password"
    //       type="password"
    //       value={formik.values.password}
    //       onChange={formik.handleChange}
    //       error={formik.touched.password && Boolean(formik.errors.password)}
    //       helperText={formik.touched.password && formik.errors.password}
    //     />
    //     <Button color="primary" variant="contained" fullWidth type="submit">
    //       Submit
    //     </Button>
    //   </form>
    // </div>
  );
};

export default FilterForm;
