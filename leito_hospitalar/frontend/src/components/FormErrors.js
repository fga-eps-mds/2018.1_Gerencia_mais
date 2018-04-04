import React from 'react';
import '../css/FormErrors.css';

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <li className="item"><p key={i}>{formErrors[fieldName]}</p></li>
        )
      } else {
        return '';
      }
    })}
</div>


export default FormErrors
