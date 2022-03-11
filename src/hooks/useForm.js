import { useState } from 'react';

const useForm = (initialValues)=> {

  const [values, setValues] = useState(initialValues);

  const [errors, setErrors ] = useState({});

  const onChangeField = (event) => {
      
    const { name, value } = event.target;
    console.log("Name es "+name);
    setValues({
      ...values,
      [name]: value
    });

    validate({ [name]: value });
  }

  const onChangeFileField = (event) => {
    const { name, files } = event.target;
    console.log(name, files);
    setValues({
      ...values,
      [name]: files
    });
    validate({ [name]: files });
  }

  const getErrors = (inputValues = values) => {
    let newErrors = {...errors, isValid: true};

    if ("titulo" in inputValues) {
      newErrors.name = "";
      if (!inputValues.titulo || inputValues.titulo.length === 0) {
        newErrors.titulo = 'El campo nombre es obligatorio';
        newErrors.isValid = false;
      }
      if (inputValues.titulo.length > 40) {
          newErrors.titulo = 'El nombre no puede ser mayor a 40 caracteres';
          newErrors.isValid = false;
      }
    }

    if ("category" in inputValues) {
      newErrors.category = "";
      if (!inputValues.category || inputValues.category == '') {
        newErrors.category = 'El campo categoría es obligatorio';
        newErrors.isValid = false;
      }
    }

    if ("description" in inputValues) {
      newErrors.description = "";
      if (!inputValues.description || inputValues.description.length === 0) {
        newErrors.description = 'El campo descripción es obligatorio';
        newErrors.isValid = false;
      }
      if (inputValues.description.length < 10) {
        newErrors.description = 'La descripción debe ser mayor de 10 caracteres.'
        newErrors.isValid = false;
      }
    }
    
    return newErrors;
  }

  const isValid = () => {
      const errors = getErrors();
      return errors.isValid;
  }

  const validate = (inputValues = values)  => {
      const errors = getErrors(inputValues);
      setErrors(errors);
  }

  return  [
    values,
    errors,
    onChangeField,
    onChangeFileField,
    isValid,
    validate,
  ];

}

export default useForm;