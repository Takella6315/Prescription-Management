import React from 'react';
import StatCardLarge from './StatCardLarge';
import Copyright from '../internals/components/Copyright';

const data = [
  {
    medicine: "Atorvastatin (Lipitor)",
    description: "Atorvastatin (Lipitor) is a medication used to treat high cholesterol and to lower the risk of stroke, heart attack, or other heart complications in people with type 2 diabetes, coronary heart disease, or other risk factors. It is a member of a group of drugs called HMG CoA reductase inhibitors, or 'statins'. It works by reducing the amount of cholesterol made by the liver. Lowering 'bad' cholesterol and triglycerides and raising 'good' cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks."
  },
  // ... more medication data
];

export default function MainGridLarger() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-bold mb-4 text-4xl">Second Opinion</h2>
        <div className="grid grid-cols-12 gap-4 mb-4">
          {data.map((item, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              <StatCardLarge medicine={item.medicine} description={item.description} />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright always at the bottom */}
      <div className="mt-auto py-4">
        <Copyright />
      </div>
    </div>
  );
}