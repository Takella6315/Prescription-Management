'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Typography, Stack, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

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

function StatCard({ medicine, dosage, interval, time, medicalIssue, medicalDescription, doctorComments}) {
  const theme = useTheme();
  const daysInWeek = getDaysInMonth(4, 2024);

  const trendColors = {
    up:
      theme.palette.mode === 'light'
        ? theme.palette.success.main
        : theme.palette.success.dark,
    down:
      theme.palette.mode === 'light'
        ? theme.palette.error.main
        : theme.palette.error.dark,
    neutral:
      theme.palette.mode === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[700],
  };

  const labelColors = {
    up: 'success',
    down: 'error',
    neutral: 'default',
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <Button className="w-full h-full" onClick={handleClickOpen}>
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
      </Button>

      {/* Popup (Dialog) */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: 'w-[1200px] h-[700px] max-w-none', // Custom width and height with Tailwind
        }}
      >
        <div className="w-full h-full relative"> {/* 'relative' to position elements inside */}
          <DialogTitle className="font-bold text-3xl mx-5 my-2">
            {medicalIssue}
          </DialogTitle>
          <DialogContent>
            <Typography className="bg-slate-200 text-base rounded-md p-5 mx-5 mb-6">
              {medicalDescription}
            </Typography>
            <Typography className="font-bold text-2xl mx-5 mb-1">
              Doctors Comments: 
            </Typography>
            <Typography className="bg-slate-200 text-base rounded-md p-5 mx-5">
              {doctorComments}
            </Typography>
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


{/* 

          <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full h-full">
          
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
          
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <DialogClose>
              <Button variant="ghost" className="mx-2">
                Cancel
              </Button>
              </DialogClose>
          </div>
        </div>
        <DialogFooter>
          <div className="text-sm">
            stuff
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  */}

  
  {/* <Button className="w-full h-full">
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
    </Button> */}