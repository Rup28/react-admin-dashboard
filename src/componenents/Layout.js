// src/components/Layout.js
import React from 'react';
import { Grid, Paper } from '@mui/material';

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>Header</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>Sidebar</Paper>
      </Grid>
      <Grid item xs={10}>
        <Paper>Main Content</Paper>
      </Grid>
    </Grid>
  );
};

export default Layout;
