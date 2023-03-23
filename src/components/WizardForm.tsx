import { Card, Typography } from "@mui/material";
import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { STEPS } from "./Form";

const WizardForm = ({ step, setStep, children }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box border="1px solid grey" p="24px" width="80%">
      <Stepper activeStep={activeStep}>
        {STEPS.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Typography my="24px" variant="h4" component="h1">
        {STEPS[step]}
      </Typography>
      {children}
    </Box>
  );
};

export default WizardForm;
