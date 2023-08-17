import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-indigo-600 text-white md:ml-7 py-2 px-6 hover:text-indigo-400 duration-500 rounded-xl font-bold'>
           {props.children}
        </button>
    );
}

export default Button;
