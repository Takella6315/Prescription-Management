'use client'
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PropTypes from 'prop-types';

function StatCardLarge({ medicine, dosage, medicalDescription }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            
          </Typography>
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
  description: PropTypes.string.isRequired,
};

export default StatCardLarge;