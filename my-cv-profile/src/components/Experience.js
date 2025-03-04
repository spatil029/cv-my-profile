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

function Projects() {
  const projects = [
    {
      name: 'GPI',
      company: 'IQVIA',
      duration: 'Currently working from April-2024',
      description: 'Report generation application that has migrated from WebFocus to React.JS and Node.JS',
      responsibilities: [
        'Responsible for design, Implementation, and deployment of the code.'
      ],
      teamSize: 4,
      type: 'Website',
      role: 'Senior Software Developer',
      projectDuration: '1 Year',
      technologies: ['Node.JS', 'React.JS']
    },
    {
      name: 'HealthLink',
      company: 'IQVIA',
      duration: 'Aug-2023 to Mar-2024',
      description: "Application designed to help you manage the child's treatment of achondroplasia on vosoritide.",
      responsibilities: [
        'Responsible for design, Implementation, and deployment of the code.'
      ],
      teamSize: 5,
      type: 'Website',
      role: 'Senior Software Developer',
      projectDuration: '6 Months',
      technologies: ['MERN']
    },
    {
      name: 'CDS Online',
      company: 'IQVIA',
      duration: 'Jul-2022 to Aug-2023',
      description: 'Job Monitoring application that calculates execution time, charged hours, and sends notifications to managers, leads, and users.',
      responsibilities: [
        'Responsible for design, Implementation, deployment of the code.'
      ],
      teamSize: 3,
      type: 'Website',
      role: 'Senior Software Developer',
      projectDuration: '1 Year',
      technologies: ['Knouckout.JS', '.Net MVC']
    },
    {
      name: 'Transportation and Finance (iCRMS)',
      company: 'Mindtree',
      duration: 'Dec-2019 to Jul-2022',
      description: 'iCRMS is a web-based Rail Car management application, which manages Contracts, Shopping, Freight Abatement, and Payments.',
      responsibilities: [
        'Responsible for design, Implementation, deployment of the code.',
        'Migrating the application to .NET Core API'
      ],
      teamSize: 5,
      type: 'Website',
      role: 'Module Lead',
      projectDuration: '3 Year',
      technologies: ['ASP.Net MVC', 'MS-SQL']
    },
    {
      name: 'STP Portal',
      company: 'STP',
      duration: 'Sep-2017 to Dec-2019',
      description: 'The STP Portal is a web-based enterprise client and operational reporting system that serves as the next-generation solution for all financial industry reporting and data management needs.',
      responsibilities: [
        'Responsible for design, Implementation, deployment of the code.'
      ],
      teamSize: 9,
      type: 'Website',
      role: 'Developer',
      projectDuration: '2.5 Year',
      technologies: ['ASP.Net MVC', 'MS-SQL Server']
    },
    {
      name: 'Enterprise Healthcare System',
      company: 'Winprotech',
      duration: 'Aug-2016 to Sep-2017',
      description: 'Healthcare Insurance system for USA state government.',
      responsibilities: [
        'Responsible for design, Implementation and deployment of the code.'
      ],
      teamSize: 15,
      type: 'Website',
      role: 'Developer',
      projectDuration: '1.5 Year',
      technologies: ['ASP.Net MVC', 'MS-SQL Server']
    },
    {
      name: 'Human Resource Management System (HRMS)',
      company: 'TCS',
      duration: 'April-2015 to Aug-2016',
      description: 'Payroll Management for Karnataka E-Governance contains the complete process of the HR Department. Compute the government servants\' salaries and generate pay slips.',
      responsibilities: [
        'Responsible for design, Implementation, deployment of the code.'
      ],
      teamSize: 15,
      type: 'Website',
      role: 'Developer',
      projectDuration: '1.5 Year',
      technologies: ['ASP.Net MVC', 'MS-SQL Server']
    }
  ];

  return (
    <Box component="section" className="projects">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{fontWeight: 'bold'}}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                      <Chip 
                        icon={<WorkIcon />} 
                        label={`Company: ${project.company}`} 
                        color="primary" 
                        variant="outlined"
                      />
                      <Chip 
                        icon={<AccessTimeIcon />} 
                        label={project.duration} 
                        color="secondary" 
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {project.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Responsibilities:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {project.responsibilities.map((resp, idx) => (
                      <Typography component="li" key={idx}>
                        {resp}
                      </Typography>
                    ))}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GroupsIcon color="action" />
                      <Typography>Team Size: {project.teamSize}</Typography>
                    </Box>
                    <Typography>Type: {project.type}</Typography>
                    <Typography>Role: {project.role}</Typography>
                    <Typography>Duration: {project.projectDuration}</Typography>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip 
                          key={idx}
                          icon={<CodeIcon />}
                          label={tech}
                          color="primary"
                          size="small"
                        />
                      ))}
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