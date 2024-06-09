import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const addFormData = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  return (
    <FormContext.Provider value={{ formData, addFormData }}>
      {children}
    </FormContext.Provider>
  );
};
