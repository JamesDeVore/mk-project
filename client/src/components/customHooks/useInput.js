import {useState} from 'react'

const useInput = callback => {

  const [values, setValues] = useState({})

  //instead of having many smaller hooks, this custom hook bundles all of my inputs together
  const handleChange = (event) => {
    event.persist();
    //pass on the original event, and update state with the varous input values
    setValues(values => ({
      ...values,[event.target.name]: event.target.value
    }));
  }
  const handleSubmit = event =>  {
    callback()
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useInput