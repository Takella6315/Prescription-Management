import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';

const data = [
  {
    medicine: 'Atorvastatin (Lipitor)',
    dosage: '25mg',
    interval: 'Tablet - Daily',
    time: 'Scheduled Time: 7:00AM',
    medicalIssue: 'Hypercholesterolemia (High Cholestorol)',
    medicalDescription: 'High cholesterol, also known as hypercholesterolemia, is a medical condition'
    + 'characterized by elevated levels of low-density lipoprotein (LDL) cholesterol in the blood'
    + 'Hypercholesterolemia is a risk factor for the development of atherosclerosis, heart disease,'
    + 'and stroke. It can be caused by a combination of genetic and lifestyle factors, including: '
    + 'Poor diet (high in saturated and trans fats, cholesterol, and refined carbohydrate Lack of '
    + 'physical activity Obesity Family history Certain medical conditions (e.g., diabetes, kidney disease,'
    + 'hypothyroidism) Medications (e.g., corticosteroids, birth control pills)',
    doctorComments: 'During our recent consultation, we discussed your diagnosis of hypercholesterolemia,' 
    + 'commonly referred to as high cholesterol. As we noted, your cholesterol levels are elevated,'
    + 'particularly the low-density lipoprotein (LDL) cholesterol, which is a known risk factor for '
    + 'cardiovascular diseases such as atherosclerosis, heart disease, and stroke. It is essential '
    + 'to address these elevated levels through both medication and lifestyle modifications. I have '
    + 'prescribed Atorvastatin (Lipitor) at a dosage of 25mg to be taken daily in tablet form, with a '
    + 'scheduled time of 7:00AM each day. This medication will help lower your LDL cholesterol and '
    + 'reduce the risk of complications associated with high cholesterol. Regular physical activity is '
    + 'also key in managing cholesterol levels, along with maintaining a healthy weight. Given your '
    + 'family history and any other underlying conditions you may have, such as diabetes or hypothyroidism, '
    + 'its especially important to follow these recommendations. We will continue to monitor your cholesterol '
    + 'levels through regular follow-up visits and blood tests to ensure the treatment plan is effective. '
    + 'Please reach out if you have any concerns or if you experience any side effects from the medication',
  },
  {
    medicine: 'Metformin (Glucophage)',
    dosage: '8.5mL',
    interval: 'Liquid (solution) - Daily with meal',
    time: 'Scheduled Time: 6:00PM',
    medcialIssue: '',
    medicalDescription: '',
  },
  {
    medicine: 'Levothryoxine (Synthroid)',
    dosage: '115mcg',
    interval: 'capsules - Daily',
    time: 'Scheduled Time: 7:00AM',
    medcialIssue: '',
    medicalDescription: '',
  },
];

export default function MainGrid() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-bold mb-2 text-3xl">Overview</h2>
        <div className="grid grid-cols-12 gap-2 mb-2">
          {data.map((card, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <StatCard {...card} />
            </div>
          ))}
        </div>

        <h2 className="font-bold mb-2 text-3xl">Overview</h2>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-9"></div>
          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-col gap-2 lg:flex-col sm:flex-row">
              {/* Stack content */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright always at the bottom */}
      <div className="mt-auto py-4">
        <Copyright />
      </div>
    </div>
  );
}
