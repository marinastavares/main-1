import React, { useState, createContext, useMemo, useCallback } from "react";
import { getData, postData } from "./fetch";

const initialState = {
  models: [],
  model: {
    id: "",
    name: "",
    data: {},
    response: {},
  },
  isLoading: false,
  isErrored: false,
  error: "",
};

export type ModelProps = {
  id: string;
  name: string;
  data:
    | {
        "waf.score": number;
        "waf.xss.score": number;
        "waf.spli.score": number;
        "waf.rce.score": number;
      }
    | {};
  response: any;
};

type StateProps = {
  models: ModelProps[];
  model: ModelProps;
  isLoading: boolean;
  isErrored: boolean;
  error: any;
};

type ContextProps = StateProps &
  Partial<{
    handleCreateModel: (value: string) => void;
    handleUploadModel: (value: string) => void;
    handleDeployProject: () => void;
    getModels: () => void;
    getModel: (id: string) => void;
    getInference: (id: string) => void;
    sendModelData: (id: string, data: string) => void;
  }>;

export const StateContext = createContext<ContextProps>(initialState);

export const State = StateContext.Consumer;

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  const setLoading = (value: boolean) => {
    setState((prevState) => ({ ...prevState, isLoading: value }));
  };

  const handleCreateModel = useCallback(async (name: string) => {
    setLoading(true);

    try {
      const createModelData = await postData("create", {
        name,
      });
      setState((prevState) => ({
        ...prevState,
        model: {
          ...prevState.model,
          id: createModelData.id,
        },
      }));
    } catch (error) {
      console.error("Something went wrong");
      setState((prevState) => ({
        ...prevState,
        error: "Error creating model",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUploadModel = useCallback(async (model: string) => {
    setLoading(true);

    try {
      await postData(`${state.model.id}/create`, {
        model,
      });
    } catch (error) {
      console.error("Something went wrong");
      setState((prevState) => ({
        ...prevState,
        error: "Error uploading model",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeployProject = useCallback(async () => {
    setLoading(true);

    try {
      await postData(`${state.model.id}/deploy`);
    } catch (error) {
      console.error("Something went wrong");
      setState((prevState) => ({
        ...prevState,
        error: "Error deploying model",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const getModels = useCallback(async () => {
    setLoading(true);

    try {
      const models = await getData(`models`);
      setState((prevState) => ({
        ...prevState,
        models,
      }));
    } catch (error) {
      console.error("Something went wrong", error);
      setState((prevState) => ({
        ...prevState,
        error: "Error getting model",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);
  const getModel = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const model = await getData(`models/${id}`);
      setState((prevState) => ({
        ...prevState,
        model,
      }));
    } catch (error) {
      console.error("Something went wrong", error);
      setState((prevState) => ({
        ...prevState,
        error: "Error getting model",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const getInference = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const data = await getData(`${id}/inference`);
      setState((prevState) => ({
        ...prevState,
        model: { ...prevState.model, data },
      }));
    } catch (error) {
      console.error("Something went wrong", error);
      setState((prevState) => ({
        ...prevState,
        error: "Error inference",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);
  const sendModelData = useCallback(async (id: string, data: string) => {
    setLoading(true);

    try {
      const response = await postData(`${id}/inference`, data);
      setState((prevState) => ({
        ...prevState,
        model: { ...prevState.model, response },
      }));
    } catch (error) {
      console.error("Something went wrong", error);
      setState((prevState) => ({
        ...prevState,
        error: "Error inference",
        isErrored: true,
      }));
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      handleCreateModel,
      handleUploadModel,
      handleDeployProject,
      getModels,
      getModel,
      getInference,
      sendModelData,
    }),
    [
      getInference,
      getModel,
      getModels,
      handleCreateModel,
      handleDeployProject,
      handleUploadModel,
      sendModelData,
      state,
    ]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
