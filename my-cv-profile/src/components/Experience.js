import React from 'react';
import { Typography, Box, Container, Card, CardContent, Grid, Chip, Divider,Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Experience() {
  const experiences = [
    {
      company: 'IQVIA',
      position: 'Senior Software Developer',
      duration: 'Jul 2022 - Present',
      years: '2.5 years'
    },
    {
      company: 'Mindtree Limited',
      position: 'Module Lead',
      duration: 'Dec 2019 - Jul 2022',
      years: '2.5 years'
    },
    {
      company: 'STP Investment Services',
      position: 'Software Developer',
      duration: 'Sep 2017 - Dec 2019',
      years: '2 years'
    },
    {
      company: 'Winprotech IT Solutions',
      position: 'Software Developer',
      duration: 'Aug 2016 - Sep 2017',
      years: '1 year'
    },
    {
      company: 'TCS Limited Bangalore',
      position: 'Software Trainee',
      duration: 'Apr 2015 - Aug 2017',
      years: '1.5 years'
    }
  ];

  return (
    <Box component="section" className="experience">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Work Experience
        </Typography>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 4, 
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <WorkHistoryIcon 
            color="primary" 
            sx={{ fontSize: 40 }} 
          />
          <Box>
            <Typography variant="h5" gutterBottom>
              Total Professional Experience
            </Typography>
            <Typography 
              variant="h4" 
              color="primary" 
              sx={{ fontWeight: 'bold' }}
            >
              9.5+ Years
            </Typography>
          </Box>
        </Paper>
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <BusinessIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box flex={1}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {exp.position}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.duration} • {exp.years}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;