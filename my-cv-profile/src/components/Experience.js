import React from 'react';
import { Typography, Box, Container, Card, CardContent, Grid, Chip, Divider,Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Utility function to parse month name to number
const parseMonth = (monthStr) => {
  const months = {
    'jan': 0, 'january': 0, 'feb': 1, 'february': 1, 'mar': 2, 'march': 2,
    'apr': 3, 'april': 3, 'may': 4, 'jun': 5, 'june': 5,
    'jul': 6, 'july': 6, 'aug': 7, 'august': 7, 'sep': 8, 'september': 8,
    'oct': 9, 'october': 9, 'nov': 10, 'november': 10, 'dec': 11, 'december': 11
  };
  return months[monthStr.toLowerCase()] ?? null;
};

// Utility function to calculate years and months from duration string
const calculateDuration = (durationStr) => {
  const isPresent = durationStr.toLowerCase().includes('present') || durationStr.toLowerCase().includes('currently');
  const parts = durationStr.split(/[-–—]/).map(s => s.trim());
  
  if (parts.length < 2 && !isPresent) {
    return { years: 0, months: 0, display: 'N/A' };
  }

  let startDate, endDate;
  
  if (isPresent) {
    // Parse start date
    const startMatch = durationStr.match(/(\w+)\s+(\d{4})/i);
    if (startMatch) {
      const month = parseMonth(startMatch[1]);
      const year = parseInt(startMatch[2]);
      startDate = new Date(year, month, 1);
    } else {
      return { years: 0, months: 0, display: 'N/A' };
    }
    endDate = new Date(); // Current date
  } else {
    // Parse both dates
    const startMatch = parts[0].match(/(\w+)\s+(\d{4})/i);
    const endMatch = parts[1].match(/(\w+)\s+(\d{4})/i);
    
    if (startMatch && endMatch) {
      const startMonth = parseMonth(startMatch[1]);
      const startYear = parseInt(startMatch[2]);
      const endMonth = parseMonth(endMatch[1]);
      const endYear = parseInt(endMatch[2]);
      
      startDate = new Date(startYear, startMonth, 1);
      endDate = new Date(endYear, endMonth, 1);
    } else {
      return { years: 0, months: 0, display: 'N/A' };
    }
  }

  // Calculate difference
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  
  let totalMonths = years * 12 + months;
  if (totalMonths < 0) totalMonths = 0;
  
  const calculatedYears = Math.floor(totalMonths / 12);
  const calculatedMonths = totalMonths % 12;
  
  // Format display string
  let display = '';
  if (calculatedYears > 0) {
    display = calculatedYears === 1 ? '1 year' : `${calculatedYears} years`;
    if (calculatedMonths > 0) {
      display += ` ${calculatedMonths} month${calculatedMonths > 1 ? 's' : ''}`;
    }
  } else if (calculatedMonths > 0) {
    display = `${calculatedMonths} month${calculatedMonths > 1 ? 's' : ''}`;
  } else {
    display = 'Less than a month';
  }
  
  return {
    years: calculatedYears + (calculatedMonths / 12),
    months: totalMonths,
    display: display
  };
};

// Utility function to calculate project duration from duration string (for Projects component)
const calculateProjectDuration = (durationStr) => {
  const isPresent = durationStr.toLowerCase().includes('present') || 
                    durationStr.toLowerCase().includes('currently') ||
                    durationStr.toLowerCase().includes('working');
  
  // Handle "Currently working from" format
  if (isPresent) {
    const match = durationStr.match(/(\w+)-(\d{4})/i) || durationStr.match(/(\w+)\s+(\d{4})/i);
    if (match) {
      const month = parseMonth(match[1]);
      const year = parseInt(match[2]);
      const startDate = new Date(year, month, 1);
      const endDate = new Date();
      
      const years = endDate.getFullYear() - startDate.getFullYear();
      const months = endDate.getMonth() - startDate.getMonth();
      const totalMonths = years * 12 + months;
      
      if (totalMonths >= 12) {
        const calculatedYears = Math.floor(totalMonths / 12);
        const calculatedMonths = totalMonths % 12;
        if (calculatedMonths === 0) {
          return calculatedYears === 1 ? '1 Year' : `${calculatedYears} Years`;
        }
        const yearDecimal = (calculatedYears + calculatedMonths / 12).toFixed(1);
        return `${yearDecimal} Year${calculatedYears > 1 ? 's' : ''}`;
      }
      return `${totalMonths} Month${totalMonths > 1 ? 's' : ''}`;
    }
    return 'Ongoing';
  }
  
  // Handle "Month-Year to Month-Year" format
  const parts = durationStr.split(/[-–—to]/i).map(s => s.trim());
  if (parts.length >= 2) {
    const startMatch = parts[0].match(/(\w+)-(\d{4})/i);
    const endMatch = parts[1].match(/(\w+)-(\d{4})/i);
    
    if (startMatch && endMatch) {
      const startMonth = parseMonth(startMatch[1]);
      const startYear = parseInt(startMatch[2]);
      const endMonth = parseMonth(endMatch[1]);
      const endYear = parseInt(endMatch[2]);
      
      const startDate = new Date(startYear, startMonth, 1);
      const endDate = new Date(endYear, endMonth, 1);
      
      const years = endDate.getFullYear() - startDate.getFullYear();
      const months = endDate.getMonth() - startDate.getMonth();
      const totalMonths = years * 12 + months;
      
      if (totalMonths >= 12) {
        const calculatedYears = Math.floor(totalMonths / 12);
        const calculatedMonths = totalMonths % 12;
        if (calculatedMonths === 0) {
          return calculatedYears === 1 ? '1 Year' : `${calculatedYears} Years`;
        }
        // Format as "X.Y Year(s)" for partial years
        const yearDecimal = (calculatedYears + calculatedMonths / 12).toFixed(1);
        return `${yearDecimal} Year${calculatedYears > 1 ? 's' : ''}`;
      }
      return `${totalMonths} Month${totalMonths > 1 ? 's' : ''}`;
    }
  }
  
  return 'N/A';
};

function Experience() {
  const experiences = [
    {
      company: 'IQVIA',
      position: 'Senior Software Developer',
      duration: 'Jul 2022 - Present'
    },
    {
      company: 'Mindtree Limited',
      position: 'Module Lead',
      duration: 'Dec 2019 - Jul 2022'
    },
    {
      company: 'STP Investment Services',
      position: 'Software Developer',
      duration: 'Sep 2017 - Dec 2019'
    },
    {
      company: 'Winprotech IT Solutions',
      position: 'Software Developer',
      duration: 'Aug 2016 - Sep 2017'
    },
    {
      company: 'TCS Limited Bangalore',
      position: 'Software Trainee',
      duration: 'Apr 2015 - Aug 2016'
    }
  ];

  // Calculate years for each experience and total
  const experiencesWithYears = experiences.map(exp => ({
    ...exp,
    durationData: calculateDuration(exp.duration)
  }));

  const totalYears = experiencesWithYears.reduce((sum, exp) => sum + exp.durationData.years, 0);
  const totalYearsDisplay = totalYears >= 1 
    ? `${totalYears.toFixed(1)}+ Years` 
    : `${(totalYears * 12).toFixed(0)}+ Months`;

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
              {totalYearsDisplay}
            </Typography>
          </Box>
        </Paper>
        <Grid container spacing={3}>
          {experiencesWithYears.map((exp, index) => (
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
                        {exp.duration} • {exp.durationData.display}
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
      technologies: ['ASP.Net MVC', 'MS-SQL Server']
    }
  ];

  // Calculate project duration for each project
  const projectsWithDuration = projects.map(project => ({
    ...project,
    projectDuration: calculateProjectDuration(project.duration)
  }));

  return (
    <Box component="section" className="projects">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{fontWeight: 'bold'}}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectsWithDuration.map((project, index) => (
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