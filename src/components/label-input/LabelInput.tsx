import React,{ useState } from 'react';

interface LabelInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const LabelInput = ({ label, name, value, onChange, id }: LabelInputProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default LabelInput;