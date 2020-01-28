import React from 'react';
import {
  MobileStepper,
  Button
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


export default function JobListStepper({options}) {

  const { activeStep, numPages, handleBack, handleNext } = options

  return (
    <div className="stepper">
      <div>
        Page {activeStep + 1} of {numPages === 0 ? numPages + 1 : numPages}
      </div>

      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1 || numPages === 0}>
            Next
          <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
        </Button>
        }
      />
    </div>
  )
}