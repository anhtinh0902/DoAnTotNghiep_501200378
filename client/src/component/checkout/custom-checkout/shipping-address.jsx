import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = values => {
  const { name, email, address } = values;
  const errors = {};
  if (!email) { errors.email = 'Required'}; 
  if (!name) { errors.name = 'Required' };
  if (!address) { errors.address = 'Required'};
    
  return errors;
}

const ShippingAddress = ({ setShipping }) => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    name: '',
    address: '',
  }
  const handleNavigate = () => { navigate('/success')}
  return (
    <div>
      <h4>Thông tin thanh toán</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log('values', values);
          setShipping(values);
        

         
        }}
        
      >
        {
          ({ values, errors, handleChange, handleSubmit }) => {
            const { name, email, address } = errors;
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input 
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                    placeholder='Name'
                    className={ 'nomad-input ' + (name ? 'error' : '') }
                  /> 
                </div>
                <div>
                  <input 
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Email'
                    className={ 'nomad-input ' + (email ? 'error' : '') }
                  /> 
                </div>
                <div>
                  <input 
                    type='text'
                    name='address'
                    onChange={handleChange}
                    value={values.address}
                    placeholder='Address'
                    className={ 'nomad-input ' + (address ? 'error' : '') }
                  /> 
                </div>
                <div className='submit-btn' >
                  <button type='submit' className='button is-black nomad-btn submit'>
                    Tiếp tục
                  </button>
                </div>
              </form>
            );
          }
        }
      </Formik>
    </div>
  );
};

export default ShippingAddress;