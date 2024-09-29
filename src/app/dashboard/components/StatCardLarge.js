import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

function StatCardLarge({ medicine, dosage, medicalDescription, doctorComments }) {
  const [open, setOpen] = useState(false);
  const [showDelayedText, setShowDelayedText] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setShowDelayedText(false);
    setLoading(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDelayedText(false);
    setLoading(false);
  };

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setLoading(false);
        setShowDelayedText(true);
      }, 3000); // 3 seconds delay
    }
    return () => clearTimeout(timer);
  }, [open]);

  const getPlaceholderText = () => {
    if (medicine.includes("Atorvastatin")) {
      return "Atorvastatin is commonly used to lower cholesterol and reduce the risk of heart disease. A typical dose starts at 10-20mg per day for adults, and the maximum dose is 80mg daily. A 25mg dose is within the acceptable range and is often prescribed for individuals with higher cholesterol levels. However, this dose may increase the risk of side effects, including muscle pain, liver damage, and increased blood sugar levels. Since you are also on Metformin, which controls blood sugar, there could be a potential risk of fluctuating glucose levels. Additionally, combining Atorvastatin with Levothyroxine may require monitoring, as statins can interfere with thyroid hormone metabolism. The combination of these medications warrants regular liver function tests and blood sugar monitoring to avoid serious complications. If you experiences any muscle pain, fatigue, or other side effects, it is recommended that you seek a follow-up with your doctor to reassess the combination of medications. A second opinion may also be valuable to ensure that the combination of treatments is safe and effective for their health.";
    } else if (medicine.includes("Metformin")) {
      return "Metformin is a standard treatment for managing type 2 diabetes by improving insulin sensitivity. The 8.5mL dose you're referring to likely corresponds to 850mg in pill form, a typical starting dose. It's usually well-tolerated but can cause gastrointestinal issues like nausea, diarrhea, and bloating. Patients with thyroid issues, such as those on Levothyroxine, should be cautious, as Metformin may influence thyroid function and interact with thyroid medications. In combination with Atorvastatin, there could also be an increased risk for lactic acidosis, a rare but serious side effect of Metformin, especially if liver function is compromised. You should remember to stay hydrated and monitor for any signs of worsening thyroid function or metabolic issues. Given the combination of medications, regular monitoring of blood glucose, thyroid function, and liver health is crucial to avoid complications. If any issues arise, seeking a consultation with your doctor or endocrinologist is recommended to ensure the treatment plan is safe and effective.";
    } else if (medicine.includes("Levothryoxine")) {
      return "Levothyroxine is used to treat hypothyroidism, and a dose of 115mcg is typical for adults, though exact amounts depend on the patient's TSH levels. It's crucial to take Levothyroxine on an empty stomach, as food or certain medications (like Metformin) can interfere with its absorption. Since the you are also on Atorvastatin, there could be a small risk of interaction, as statins can sometimes alter thyroid hormone metabolism. Regular thyroid function tests (TSH, T4) are essential to ensure the dose remains appropriate and the medication works as intended. Additionally, Levothyroxine may increase the metabolism of other drugs, potentially requiring adjustments in Metformin or Atorvastatin dosage. Monitoring for signs of thyroid imbalance or interactions is important, particularly with this combination of medications. If you experience symptoms of hyperthyroidism or hypothyroidism, it would be wise to consult with your doctor to reassess the medication plan and possibly seek a second opinion to ensure optimal treatment.";
    }
    return "AI analysis: Placeholder text for medication. Further analysis required.";
  };

  return (
    <>
      <div className="w-[600px] h-[250px] mb-4">
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <Typography className="text-left font-bold" component="h2" variant="h5" gutterBottom>
                {medicine}
              </Typography>
              <Typography className="text-left font-bold" component="h2" variant="h5" gutterBottom>
                {dosage}
              </Typography>
              <Typography className="text-left" variant="body2" sx={{ color: 'text.secondary' }}>
                {medicalDescription.length > 150 ? medicalDescription.substring(0, 150) + '...' : medicalDescription}
              </Typography>
            </div>
            <Button
              className="bg-[#788F5D] hover:bg-gray-600 text-white px-6 text-lg rounded self-center mt-auto"
              color="primary"
              onClick={handleClickOpen}
            >
              Learn more from AI...
            </Button>
          </CardContent>
        </Card>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: 'w-[800px] max-w-none',
        }}
      >
        <DialogTitle className="font-bold text-2xl">{medicine}</DialogTitle>
        <DialogContent>
          <Typography className="text-base">
            {medicalDescription}
          </Typography>
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <CircularProgress />
            </div>
          )}
          {showDelayedText && (
            <Typography className="text-base mt-4 font-bold">
              {getPlaceholderText()}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            className="bg-[#788F5D] hover:bg-gray-600 text-white px-6 text-lg rounded"
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

StatCardLarge.propTypes = {
  medicine: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  medicalDescription: PropTypes.string.isRequired,
  doctorComments: PropTypes.string,
};

export default StatCardLarge;