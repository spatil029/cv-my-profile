import React from 'react';
import { Typography, Box, Container, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const education = [
    {
      institution: 'Karnataka University Dharwad',
      degree: 'Master of Computer Applications (MCA)',
      duration: '2011 - 2014',
      description: 'Post Graduation in Computer Applications'
    },
    {
      institution: 'JSS College Dharwad',
      degree: 'Bachelor Degree (BSc)',
      duration: '2007 - 2011',
      description: 'Graduation Studies'
    }
  ];

  return (
    <Box component="section" className="education">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom  sx={{fontWeight: 'bold'}}>
          Education
        </Typography>
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box flex={1}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.duration}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {edu.description}
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

export default Education;