// src/pages/UserDashboard.js

import React, { useContext } from 'react';
import { TestContext } from '../context/TestContext';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';

const UserDashboard = () => {
  const { userTests } = useContext(TestContext);

  // Prepare data for the chart
  const chartData = {
    labels: userTests.map(test => test.date),
    datasets: [
      {
        label: 'Test Scores',
        data: userTests.map(test => test.score),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Score',
        },
      },
    },
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Dashboard
      </Typography>

      {/* Line chart showing test score progression */}
      <Box sx={{ height: 400 }}>
        <Line data={chartData} options={chartOptions} />
      </Box>

      {/* Table showing test history */}
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTests.map((test, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {test.date}
                </TableCell>
                <TableCell align="right">{test.score}</TableCell>
                <TableCell align="right">{test.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserDashboard;
