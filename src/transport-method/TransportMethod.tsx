import React from 'react';

interface TransportMethodProps {
  selectedMethod: string;
  onMethodChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const transportOptions = [
  { label: 'Car', value: 'car', pricePerKm: 0.20 },
  { label: 'Train', value: 'train', pricePerKm: 0.15 },
  { label: 'Plane', value: 'plane', pricePerKm: 0.10 },
];

function TransportMethod({ selectedMethod, onMethodChange }: TransportMethodProps) {
  return (
    <div>
      <label htmlFor="transport-method">Transport Method:</label>
      <select id="transport-method" value={selectedMethod} onChange={onMethodChange}>
        {transportOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TransportMethod;
