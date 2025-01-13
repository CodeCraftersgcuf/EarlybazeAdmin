import React from 'react';

const InputField = ({ label, type, name, placeholder, value, onChange, onBlur, error, touched }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2 capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-3 rounded-lg border ${
          error && touched ? 'border-red-500' : 'border-gray-300'
        } bg-theme-dark text-white`}
      />
      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
