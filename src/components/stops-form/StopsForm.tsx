import React, { useState } from 'react';
import LabelInput from '../label-input/LabelInput';
import TransportMethod from '../transport-method/TransportMethod';

type Stop = {
  startLocation: string;
  primaryDestination: string;
  distance: string;
};

type TransportMethod = 'car' | 'train' | 'plane';

const transportPrices: { [key in TransportMethod]: number } = {
  car: 0.20,
  train: 0.15,
  plane: 0.10,
};

function StopsForm() {
  const [stops, setStops] = useState<Stop[]>([{ startLocation: "", primaryDestination: "", distance: "" }]);
  const [selectedMethod, setSelectedMethod] = useState<TransportMethod>('car');
  const [totalCost, setTotalCost] = useState<string>('0.00');

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newStops = [...stops];
    newStops[index] = { ...newStops[index], [name]: value };
    setStops(newStops);
  };

  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(event.target.value as TransportMethod);
  };

  const addNewStop = () => {
    setStops([...stops, { startLocation: "", primaryDestination: "", distance: "" }]);
  };

  const calculateTotalCost = () => {
    const total = stops.reduce((acc, stop) => {
      const distanceNumber = parseFloat(stop.distance);
      const costPerKm = transportPrices[selectedMethod];
      const cost = isNaN(distanceNumber) ? 0 : distanceNumber * costPerKm;
      return acc + cost;
    }, 0);
    setTotalCost(total.toFixed(2));
  };

  return (
    <div>
      {stops.map((stop, index) => (
        <div key={index} className="container" style={{ marginBottom: "10px" }}>
          <LabelInput
            label="Start Location"
            name="startLocation"
            value={stop.startLocation}
            onChange={(event) => handleInputChange(index, event)}
            id={`start-location-${index}`}
          />
          <LabelInput
            label="Primary Destination"
            name="primaryDestination"
            value={stop.primaryDestination}
            onChange={(event) => handleInputChange(index, event)}
            id={`primary-destination-${index}`}
          />
          <LabelInput
            label="Distance (km)"
            name="distance"
            value={stop.distance}
            onChange={(event) => handleInputChange(index, event)}
            id={`distance-${index}`}
          />
        </div>
      ))}
      <button onClick={addNewStop}>Add Another Stop</button>
      <TransportMethod selectedMethod={selectedMethod} onMethodChange={handleMethodChange} />
      <div style={{ marginTop: '10px' }}>
        Total Cost: ${totalCost}
      </div>
      <button onClick={calculateTotalCost} style={{ marginTop: '10px' }}>Calculate Cost</button>
    </div>
  );
}

export default StopsForm;
