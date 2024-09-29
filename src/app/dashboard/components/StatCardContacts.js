import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { Trash } from 'lucide-react';


function StatCardContacts({ name, phoneNumber, email, relationship, onDelete }) {
  return (
    <Card variant="outlined" sx={{ width: '100%', mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1">
              <strong>Phone:</strong> {phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1">
              <strong>Email:</strong> {email}
            </Typography>
          </Grid>
          {relationship !== "personal" && (
            <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ mr: 1 }}>
                <strong>Relationship:</strong> {relationship}
              </Typography>
              <IconButton onClick={onDelete} size="small" className='bg-red-400 absolute right-0 mx-10'>
                <Trash size={18}/>
              </IconButton>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

StatCardContacts.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
};

export default StatCardContacts;