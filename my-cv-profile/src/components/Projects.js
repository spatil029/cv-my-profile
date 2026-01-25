import React, { useRef } from 'react';
import { Typography, Box, Chip } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiDotnet,
  SiJquery,
  SiAngular,
  SiTypescript
} from 'react-icons/si';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import './Projects.css'; // Import the CSS for ripple effect

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

// Utility function to calculate project duration from duration string
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
        return `${calculatedYears}.${Math.floor(calculatedMonths / 12 * 10)} Year${calculatedYears > 1 ? 's' : ''}`;
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

// Technology icon mapping function
const getTechIcon = (techName) => {
  const techLower = techName.toLowerCase().replace(/[.\s]/g, '');
  const iconStyle = { fontSize: '0.9rem' };
  
  // Map technology names to their icons
  if (techLower.includes('react') || techLower === 'reactjs') {
    return <SiReact style={{ ...iconStyle, color: '#61DAFB' }} />;
  }
  if (techLower.includes('node') || techLower === 'nodejs') {
    return <SiNodedotjs style={{ ...iconStyle, color: '#339933' }} />;
  }
  if (techLower.includes('express')) {
    return <SiExpress style={{ ...iconStyle, color: '#000000' }} />;
  }
  if (techLower.includes('sql') || techLower.includes('mssql') || techLower.includes('mssqlserver')) {
    return <StorageIcon sx={{ fontSize: '0.9rem', color: '#CC2927' }} />;
  }
  if (techLower.includes('mongo') || techLower.includes('mern')) {
    return <SiMongodb style={{ ...iconStyle, color: '#47A248' }} />;
  }
  if (techLower.includes('netcore') || techLower.includes('aspnetcore') || techLower.includes('dotnetcore') || techLower.includes('netcoreapi')) {
    return <SiDotnet style={{ ...iconStyle, color: '#512BD4' }} />;
  }
  if (techLower.includes('aspnetmvc') || techLower.includes('netmvc') || techLower.includes('csharp') || techLower.includes('c#')) {
    return <CodeIcon sx={{ fontSize: '0.9rem', color: '#239120' }} />;
  }
  if (techLower.includes('jquery')) {
    return <SiJquery style={{ ...iconStyle, color: '#0769AD' }} />;
  }
  if (techLower.includes('angular')) {
    return <SiAngular style={{ ...iconStyle, color: '#DD0031' }} />;
  }
  if (techLower.includes('knockout')) {
    return <CodeIcon sx={{ fontSize: '0.9rem', color: '#E23738' }} />;
  }
  if (techLower.includes('typescript')) {
    return <SiTypescript style={{ ...iconStyle, color: '#3178C6' }} />;
  }
  
  // Default: return a generic code icon if no match found
  return <CodeIcon sx={{ fontSize: '0.9rem' }} />;
};

function Projects() {
  const audioRef = useRef(null);

  const projects = [
    {
      company: 'IQVIA',
      projects: [
        {
          name: 'GPI',
          duration: 'Currently working from April-2024',
          description: 'Report generation application that has migrated from WebFocus to React.JS and Node.JS',
          teamSize: 4,
          role: 'Senior Software Developer',
          technologies: ['Node.JS', 'Express', 'React.JS', 'SQL Server'],
          audio: 'path/to/your/audio/file.mp3'
        },
        {
          name: 'HealthLink',
          duration: 'Aug-2023 to Mar-2024',
          description: "Application designed to help you manage the child's treatment of achondroplasia on vosoritide.",
          teamSize: 5,
          role: 'Senior Software Developer',
          technologies: ['MERN','MongoDB','Express','React','Node.JS']
        },
        {
          name: 'CDS Online',
          duration: 'Jul-2022 to Aug-2023',
          description: 'Job Monitoring application that calculates execution time, charged hours, and sends notifications.',
          teamSize: 3,
          role: 'Senior Software Developer',
          technologies: ['React', '.Net MVC','ASP.Net Core', 'SQL Server']
        }
      ]
    },
    {
      company: 'Mindtree',
      projects: [
        {
          name: 'Transportation and Finance (iCRMS)',
          duration: 'Dec-2019 to Jul-2022',
          description: 'iCRMS is a web-based Rail Car management application.',
          teamSize: 5,
          role: 'Module Lead',
          technologies: ['ASP.Net MVC', 'JQuery','React', 'MS-SQL', 'Knouckout.JS', 'Angular.JS', 'SQL Server', 'ASP.Net Core']
        }
      ]
    },
    {
      company: 'STP Investment Services',
      projects: [
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
        technologies: ['ASP.Net MVC','JQuery','.Net Core', 'MS-SQL Server']
      }]
    },
    {
      company: 'Winprotech',
      projects: [
    {
      name: 'Enterprise Healthcare System',
      duration: 'Aug-2016 to Sep-2017',
      description: 'Healthcare Insurance system for USA state government.',
      responsibilities: [
        'Responsible for design, Implementation and deployment of the code.'
      ],
      teamSize: 15,
      type: 'Website',
      role: 'Developer',
      projectDuration: '1 Year',
      technologies: ['ASP.Net MVC', 'JQuery', '.Net Core API','MS-SQL Server']
    }]
    },
    {
      company: 'TCS',
      projects: [
    {
      name: 'Human Resource Management System (HRMS)',
      duration: 'April-2015 to Aug-2016',
      description: 'Payroll Management for Karnataka E-Governance contains the complete process of the HR Department. Compute the government servants\' salaries and generate pay slips.',
      responsibilities: [
        'Responsible for design, Implementation, deployment of the code.'
      ],
      teamSize: 15,
      type: 'Website',
      role: 'Developer',
      projectDuration: '1.5 Year',
      technologies: ['ASP.Net MVC','JQuery', 'MS-SQL Server']
    }]
    },

    // ... Add other companies and their projects
  ];

  

  return (
    <Box sx={{ height: '100%', m: 0, p: 0 }}>
      <audio ref={audioRef} />
      <Box sx={{ 
        py: 1.5,
        px: 2,
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff'
      }}>
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            color: '#2c3e50',
            fontSize: '1.1rem'
          }}
        >
          Projects
        </Typography>
      </Box>

      <Box sx={{ p: 0 }}>
        {projects.map((companyGroup, index) => (
          <Box key={index} sx={{ mb: index !== projects.length - 1 ? 2 : 0 }}>
            <Box sx={{ 
              py: 1,
              px: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              borderBottom: '1px solid #eee'
            }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#1976d2' }}>
                {companyGroup.company}
              </Typography>
            </Box>

            {companyGroup.projects.map((project, pIndex) => (
              <Box key={pIndex} sx={{ 
                borderBottom: pIndex !== companyGroup.projects.length - 1 ? '1px solid #eee' : 'none',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.01)' }
              }}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {project.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Chip 
                        size="small"
                        icon={<AccessTimeIcon sx={{ fontSize: '0.9rem' }} />}
                        label={project.duration}
                        variant="outlined"
                        sx={{ ml: 1 }}
                        className="ripple-chip"
                      />
                      
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <GroupsIcon sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        Team: {project.teamSize}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {project.role}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {project.technologies.map((tech, tIndex) => {
                      const techIcon = getTechIcon(tech);
                      return (
                        <Chip
                          key={tIndex}
                          size="small"
                          icon={techIcon}
                          label={tech}
                          variant="outlined"
                          sx={{ 
                            ml: 1,
                            backgroundColor: 'transparent',
                            color: '#1976d2',
                            '& .MuiChip-label': { 
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }
                          }}
                          className="ripple-chip"
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Projects; 