'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardContent, Typography, Stack, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DialogFooter } from '../../../../packages/ui/src/components/ui/dialog';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function StatCard({ medicine, dosage, interval, time}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <div className="w-full h-full">
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardContent>
            <Typography className="text-left" component="h2" variant="subtitle2" gutterBottom>
              {medicine}
            </Typography>
            <Stack
              direction="column"
              sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
            >
              <Stack sx={{ justifyContent: 'space-between' }}>
                <Stack
                  direction="row"
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography className="text-left" variant="h4" component="p">
                    {dosage}
                  </Typography>
                  <Button onClick={handleClickOpen} >
                    Reschedule
                  </Button>
                </Stack>
                <Typography className="text-left" variant="caption" sx={{ color: 'text.secondary' }}>
                  {interval}
                </Typography>
                <Typography className="text-left" variant="h5" sx={{ color: '#788F5D' }}>
                  {time}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: 'w-[400px] h-[300] max-w-none', // Adjusted height for better layout
        }}
      >
        <div className="w-full h-full relative flex flex-col justify-between"> {/* Flex column to space elements */}
          <DialogTitle className="font-bold text-3xl mx-5 my-2 text-center">
            {/* Centered title */}
          </DialogTitle>

          <DialogContent className="flex flex-col items-center justify-center flex-grow">
            <Typography className="font-bold text-lg mb-3 text-center">
              Reschedule Medication Time
            </Typography>

            {/* Time Picker centered and bigger */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="Select time"
                  sx={{ width: '250px', height: '50px' }} // Adjusted size
                />
              </DemoContainer>
            </LocalizationProvider>
          </DialogContent>

          {/* Footer section */}
          <div className="text-center font-bold mb-2">
            Are you sure you would like to reschedule your prescription time?
          </div>

          {/* Buttons aligned to left and right */}
          <DialogActions className="flex justify-between mx-5">
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


    </>
  );
}

StatCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  interval: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['down', 'neutral', 'up']).isRequired,
  value: PropTypes.string.isRequired,
};

export default StatCard;
