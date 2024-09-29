import * as React from 'react';
import Copyright from '../internals/components/Copyright';
import StatCard from './StatCard';
import { Grid2, Button } from '@mui/material';
import { useState } from 'react';
import { Typography, TextField, FormControl, Select, MenuItem,FormControlLabel, Checkbox, InputLabel, Dialog, DialogTitle, DialogContent, DialogActions, DialogFooter } from '@mui/material';

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
    medcialIssue: 'Gestational diabetes mellitus (GDM)',
    medicalDescription: 'Gestational diabetes mellitus (GDM) is a type of diabetes that develops during '
    + 'pregnancy, typically after the 24th week. It is characterized by high blood sugar levels that are '
    + 'not caused by pre-existing diabetes, but rather by hormonal changes and insulin resistance during '
    + 'pregnancy. GDM is often divided into two classes: Diet-controlled GDM (class A1GDM): managed through '
    + 'dietary changes and lifestyle modifications GDM requiring pharmacologic treatment of hyperglycemia. '
    + '(class A2GDM): requires medication to control blood sugar levels. Women diagnosed with GDM are at '
    + 'high risk for developing type 2 diabetes long-term',
    doctorComments: 'You are currently being treated for gestational diabetes mellitus (GDM), which developed '
    + 'during your pregnancy. GDM is a condition where your blood sugar levels become elevated due to the '
    + 'hormonal changes and insulin resistance that occur during pregnancy, especially after the 24th week. '
    + 'We have classified your condition as requiring pharmacological intervention, which is why you have '
    + 'been prescribed Metformin (Glucophage) at a dosage of 8.5mL, to be taken daily with a meal at 6:00 PM. '
    + 'This medication will help regulate your blood sugar levels and prevent complications for both you and '
    + 'your baby. Its important to manage your blood sugar levels carefully through a combination of this '
    + 'medication and healthy lifestyle choices, such as a well-balanced diet and regular physical activity. '
    + 'Gestational diabetes can increase your risk of developing type 2 diabetes in the future, so we will '
    + 'continue to monitor your condition closely throughout your pregnancy and beyond. After delivery, we '
    + 'will reassess your blood sugar levels and provide guidance on maintaining a healthy lifestyle to reduce '
    + 'the risk of long-term complications.'
  },
  {
    medicine: 'Levothryoxine (Synthroid)',
    dosage: '115mcg',
    interval: 'capsules - Daily',
    time: 'Scheduled Time: 7:00AM',
    medcialIssue: 'Hypothroidism (underactive thyroid gland)',
    medicalDescription: 'Hyperthyroidism, also known as overactive thyroid or thyrotoxicosis, is a condition '
    + 'where the thyroid gland produces excessive amounts of thyroid hormones, including triiodothyronine (T3) '
    + 'and thyroxine (T4). This hyperactivity disrupts the body’s metabolic processes, leading to a range of '
    + 'symptoms and complications. The thyroid gland, located in the neck, plays a crucial role in regulating '
    + 'metabolism, growth, and development. It produces thyroid hormones that control the rate at which the '
    + 'body uses energy. In a normal state, the thyroid gland maintains a delicate balance of hormone production.',
    doctorsComments: 'You are being treated for hypothyroidism, a condition where your thyroid gland is underactive '
    + 'and does not produce enough thyroid hormones. As a result, you’ve been prescribed Levothyroxine (Synthroid) '
    + 'at a dosage of 115mcg, taken daily at 7:00 AM. This medication is a synthetic form of thyroxine (T4) and '
    + 'works to restore normal hormone levels, helping to regulate your metabolism and energy levels. It’s crucial '
    + 'to take this medication at the same time each day, on an empty stomach, to ensure its full effectiveness. '
    + 'Hypothyroidism can cause symptoms such as fatigue, weight gain, and cold sensitivity, but with consistent '
    + 'use of Levothyroxine, we aim to manage these symptoms and support your overall well-being. Regular blood '
    + 'tests will be needed to monitor your thyroid function and adjust the dosage if necessary. If you experience '
    + 'any changes in your symptoms or side effects, please let us know right away.'
  },
];

export default function MainGrid() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center mb-6"> {/* Flex container for alignment */}
          <h2 className="font-bold text-3xl mr-4">Overview</h2> {/* Added margin-right */}
          <Button 
            className="absolute right-0 mr-[125px] mt-5 bg-[#788F5D] hover:bg-gray-600 text-white px-6 text-lg rounded" 
            color="primary"
            onClick={handleClickOpen}
          >
            Add Prescription
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-2">
          {data.map((card, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <StatCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        className: 'w-[1200px] h-[700px] max-w-none',
      }}
    >
      <div className="w-full h-full relative">
        <DialogTitle className="font-bold text-3xl mx-5 my-2">
          Patient Prescription Form (PPF)
        </DialogTitle>
        <DialogContent>
          <div className="p-10 overflow-y-scroll">
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Patient Name:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Email */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Patient Email:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Phone Number */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Phone Number:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Gender */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Gender:</label>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="gender-label">Select Gender</InputLabel>
                  <Select labelId="gender-label" defaultValue="">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Allergies */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Allergies:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Problem */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Problem:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Medicine Prescribed */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Medicine:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Dosage */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Dosage:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Doctor's Signature */}
              <div className="flex items-center">
                <label className="font-medium mr-2">Doctor's Signature:</label>
                <TextField variant="outlined" fullWidth />
              </div>

              {/* Agreement Checkbox */}
              <div className="col-span-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to all of the above."
                />
              </div>
            </div>
          </div>
        </DialogContent>

        {/* Button positioned at bottom-right corner */}
        <DialogActions className="absolute right-5 bottom-5">
          <Button
            className="bg-[#788F5D] hover:bg-gray-600 text-white px-6 text-lg rounded"
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
          <Button
            className="bg-[#788F5D] hover:bg-gray-600 text-white px-6 text-lg rounded"
            onClick={handleClose}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </div>
    </Dialog>

      <div className="mt-auto py-4">
        <Copyright />
      </div>
    </div>
  );
}
