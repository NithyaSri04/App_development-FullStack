import React from 'react';
import PropTypes from 'prop-types';
const Textfields = ({type,name}) => {
    return (
    <div>
           <input type={type} name={name}></input>
    </div>
    );
};


Textfields.propTypes = {
    type: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
};


export default Textfields;










// import { Input } from "@material-tailwind/react";
 
// export function InputValidations() {
//   return (
//     <div className="flex w-72 flex-col items-end gap-6">
//       <Input label="Input Error" error />
//       <Input label="Input Success" success />
//     </div>
//   );
// }
