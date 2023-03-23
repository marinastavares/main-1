import React, { useMemo, useState } from "react";
import CreateProject from "./CreateProject";
import WizardForm from "./WizardForm";
import UploadModel from "./UploadModel";
import DeployModel from "./DeployModel";

export const API = "https://ursa-minor-backend.igneus.cfdata.org";
export const STEPS = ["Create Project", "Upload Model", "Deploy Model"];

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(`${API}/${url}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const Form = () => {
  const [step, setStep] = useState(0);

  const handleData = async (value?: string) => {
    try {
      if (step === 0) {
        await postData("models", {
          name: value,
        });
      } else if (step === 1) {
        await postData("create", {
          name: value,
        });
      } else if (step === 2) {
        await postData("upload", {
          name: value,
        });
      }
    } catch (e) {
      console.error("Something went wrong");
    } finally {
      setStep((prevData) => prevData + 1);
    }
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
