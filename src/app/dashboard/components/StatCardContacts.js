import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

function StatCardContacts({ name, phoneNumber, email, relationship }) {
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
          <Grid item xs={12} sm={3}>
            <Typography variant="body1">
              <strong>Relationship:</strong> {relationship}
            </Typography>
          </Grid>
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