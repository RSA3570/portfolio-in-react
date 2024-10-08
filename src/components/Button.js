import React from 'react';

const Button = (props) => {
    return(
        <button className='bg-indigo-600 text-white py-2 px-6 rounded hover:bg-green-600'>
            {props.children}
        </button>
    );
};

export default Button;