import {useState} from 'react'

const useInput = callback => {

  const blankVals = {
    Email: "",
    First: "",
    Last: "",
    Message: ""
  };

  const [values, setValues] = useState(blankVals)

  //instead of having many smaller hooks, this custom hook bundles all of my inputs together
  const handleChange = (event) => {
    event.persist();
    //pass on the original event, and update state with the varous input values
    setValues(values => ({
      ...values,[event.target.name]: event.target.value
    }));
  }

  const clearValues = event => {
    setValues(blankVals)
  }

  return {
    handleChange,
    values,
    clearValues
  }
}

export default useInput