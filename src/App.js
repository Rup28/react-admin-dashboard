// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { CssBaseline, AppBar, Toolbar, Button } from '@mui/material';
import Layout from 'src/components/Layout';
import DataTable from './components/DataTable';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Dashboard</Button>
            <Button color="inherit" component={Link} to="/table">Table</Button>
            <Button color="inherit" component={Link} to="/chart">Chart</Button>
            <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
            <Button color="inherit" component={Link} to="/kanban">Kanban</Button>
            <Button color="inherit" onClick={toggleTheme}>Toggle Theme</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/table" render={() => <DataTable rows={[]} columns={[]} />} />
          <Route path="/chart" component={Chart} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/kanban" component={KanbanBoard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
