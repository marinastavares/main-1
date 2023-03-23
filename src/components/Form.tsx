import React, { useMemo, useState } from "react";
import CreateProject from "./CreateProject";
import WizardForm from "./WizardForm";
import UploadModel from "./UploadModel";
import DeployModel from "./DeployModel";

export const STEPS = ["Create Project", "Upload Model", "Deploy Model"];

const Form = () => {
  const [step, setStep] = useState(0);

  const handleData = () => {
    setStep((prevData) => prevData + 1);
  };

  const renderContent = useMemo(() => {
    if (step === 1) {
      return <UploadModel onNextClick={handleData} />;
    }
    if (step === 2) {
      return <DeployModel onNextClick={handleData} />;
    }
    return <CreateProject onNextClick={handleData} />;
  }, [step]);
  return <WizardForm step={step}>{renderContent}</WizardForm>;
};

export default Form;
