import React, { useState, useMemo } from 'react';
import { 
  Typography, 
  Box,
  Chip,
  Paper,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
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
import StorageIcon from '@mui/icons-material/Storage';
import '../styles/ProjectsSkillsHierarchy.css';

// Technology icon mapping function
const getTechIcon = (techName) => {
  const techLower = techName.toLowerCase().replace(/[.\s]/g, '');
  const iconStyle = { fontSize: '0.9rem', marginRight: '5px', display: 'inline' };
  
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
    return <StorageIcon sx={{ fontSize: '0.9rem', color: '#CC2927', marginRight: '5px' }} />;
  }
  if (techLower.includes('mongo') || techLower.includes('mern')) {
    return <SiMongodb style={{ ...iconStyle, color: '#47A248' }} />;
  }
  if (techLower.includes('netcore') || techLower.includes('aspnetcore') || techLower.includes('dotnetcore') || techLower.includes('netcoreapi')) {
    return <SiDotnet style={{ ...iconStyle, color: '#512BD4' }} />;
  }
  if (techLower.includes('aspnetmvc') || techLower.includes('netmvc') || techLower.includes('csharp') || techLower.includes('c#')) {
    return <CodeIcon sx={{ fontSize: '0.9rem', color: '#239120', marginRight: '5px' }} />;
  }
  if (techLower.includes('jquery')) {
    return <SiJquery style={{ ...iconStyle, color: '#0769AD' }} />;
  }
  if (techLower.includes('angular')) {
    return <SiAngular style={{ ...iconStyle, color: '#DD0031' }} />;
  }
  if (techLower.includes('knockout')) {
    return <CodeIcon sx={{ fontSize: '0.9rem', color: '#E23738', marginRight: '5px' }} />;
  }
  if (techLower.includes('typescript')) {
    return <SiTypescript style={{ ...iconStyle, color: '#3178C6' }} />;
  }
  
  return <CodeIcon sx={{ fontSize: '0.9rem', marginRight: '5px' }} />;
};

function ProjectsSkillsHierarchy() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        },
        {
          name: 'One Key',
          duration: 'Currently working from April-2024',
          description: 'HCO and HCP data validation and reporting application.',
          teamSize: 3,
          role: 'Senior Software Developer',
          technologies: ['React', 'ASP.Net Core', 'SQL Server']
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
          duration: 'Sep-2017 to Dec-2019',
          description: 'The STP Portal is a web-based enterprise client and operational reporting system that serves as the next-generation solution for all financial industry reporting and data management needs.',
          teamSize: 9,
          role: 'Developer',
          technologies: ['ASP.Net MVC','JQuery','.Net Core', 'MS-SQL Server']
        }
      ]
    },
    {
      company: 'Winprotech',
      projects: [
        {
          name: 'Enterprise Healthcare System',
          duration: 'Aug-2016 to Sep-2017',
          description: 'Healthcare Insurance system for USA state government.',
          teamSize: 15,
          role: 'Developer',
          technologies: ['ASP.Net MVC', 'JQuery', '.Net Core API','MS-SQL Server']
        }
      ]
    },
    {
      company: 'TCS',
      projects: [
        {
          name: 'Human Resource Management System (HRMS)',
          duration: 'April-2015 to Aug-2016',
          description: 'Payroll Management for Karnataka E-Governance contains the complete process of the HR Department. Compute the government servants\' salaries and generate pay slips.',
          teamSize: 15,
          role: 'Developer',
          technologies: ['ASP.Net MVC','JQuery', 'MS-SQL Server']
        }
      ]
    }
  ];

  // Build the tree data structure for checkbox tree
  const treeData = useMemo(() => {
    return projects.map((company, companyIdx) => ({
      value: `company-${companyIdx}`,
      label: (
        <span style={{ fontWeight: 600, color: '#1976d2', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BusinessIcon sx={{ fontSize: '1.4rem' }} />
          {company.company}
        </span>
      ),
      children: company.projects.map((project, projectIdx) => ({
        value: `project-${companyIdx}-${projectIdx}`,
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem' }}>
            <CodeIcon sx={{ fontSize: '1.2rem' }} />
            <div>
              <div style={{ fontWeight: 500, marginBottom: '4px' }}>
                {project.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '4px', fontWeight: 'normal' }}>
                <span style={{ marginRight: '15px' }}>📅 {project.duration}</span>
                <span style={{ marginRight: '15px' }}>👤 {project.role}</span>
                <span>👥 Team: {project.teamSize}</span>
              </div>
            </div>
          </div>
        ),
        children: project.technologies.map((tech, techIdx) => ({
          value: `tech-${companyIdx}-${projectIdx}-${techIdx}`,
          label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {getTechIcon(tech)}
              <span>{tech}</span>
            </span>
          ),
        }))
      }))
    }));
  }, [projects]);

  // Generate all node values for easy expand/collapse
  const allNodeValues = useMemo(() => {
    const values = [];
    projects.forEach((company, companyIdx) => {
      values.push(`company-${companyIdx}`);
      company.projects.forEach((project, projectIdx) => {
        values.push(`project-${companyIdx}-${projectIdx}`);
        project.technologies.forEach((_, techIdx) => {
          values.push(`tech-${companyIdx}-${projectIdx}-${techIdx}`);
        });
      });
    });
    return values;
  }, [projects]);

  // Filter nodes based on search term
  const filterNodes = (nodes, term) => {
    if (!term.trim()) {
      return nodes;
    }

    const lowerTerm = term.toLowerCase();

    // Helper function to extract all text from JSX elements recursively
    const extractText = (element) => {
      if (typeof element === 'string' || typeof element === 'number') {
        return String(element);
      }
      if (Array.isArray(element)) {
        return element.map(extractText).join(' ');
      }
      if (element?.props?.children) {
        return extractText(element.props.children);
      }
      return '';
    };

    return nodes
      .map(node => {
        const labelText = extractText(node.label).toLowerCase();
        const hasMatchingLabel = labelText.includes(lowerTerm);
        let filteredChildren = [];

        if (node.children && Array.isArray(node.children)) {
          filteredChildren = filterNodes(node.children, term);
        }

        // Include node if it matches or has matching children
        if (hasMatchingLabel || filteredChildren.length > 0) {
          return {
            ...node,
            children: filteredChildren.length > 0 ? filteredChildren : node.children
          };
        }

        return null;
      })
      .filter(node => node !== null);
  };

  // Get filtered tree data
  const filteredTreeData = useMemo(() => {
    if (!searchTerm.trim()) {
      return treeData;
    }
    return filterNodes(treeData, searchTerm);
  }, [treeData, searchTerm]);

  // Extract unique technologies across all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(company => {
      company.projects.forEach(project => {
        project.technologies.forEach(tech => {
          techSet.add(tech);
        });
      });
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Auto-expand nodes when filtering
  const autoExpandedNodes = useMemo(() => {
    if (!searchTerm.trim()) {
      return expanded;
    }
    
    // Auto-expand all nodes when filtering
    const autoExpandAll = [];
    const traverse = (nodes) => {
      nodes.forEach(node => {
        autoExpandAll.push(node.value);
        if (node.children && Array.isArray(node.children)) {
          traverse(node.children);
        }
      });
    };
    
    traverse(filteredTreeData);
    return autoExpandAll;
  }, [filteredTreeData, searchTerm, expanded]);

  return (
    <Box component="section" className="projects-skills-hierarchy" sx={{ height: '100%', m: 0, p: 0 }}>
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
          Career Journey
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          {/* Search Filter */}
          <TextField
            fullWidth
            placeholder="Filter by company, project, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#1976d2' }} />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <ClearIcon 
                    sx={{ cursor: 'pointer', color: '#999' }}
                    onClick={() => setSearchTerm('')}
                  />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip 
              label="Expand All" 
              onClick={() => setExpanded(
                searchTerm ? autoExpandedNodes : allNodeValues
              )}
              variant="outlined"
              sx={{ cursor: 'pointer' }}
            />
            <Chip 
              label="Collapse All" 
              onClick={() => setExpanded([])}
              variant="outlined"
              sx={{ cursor: 'pointer' }}
            />
            {searchTerm && (
              <Typography variant="caption" sx={{ alignSelf: 'center', color: '#666' }}>
                Showing filtered results
              </Typography>
            )}
          </Box>

          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block', 
              mt: 2, 
              p: 1, 
              backgroundColor: '#e3f2fd',
              borderRadius: 1,
              color: '#1565c0',
              fontStyle: 'italic',
              '.dark-background &': {
                backgroundColor: 'rgba(186, 104, 200, 0.1)',
                color: '#ce93d8'
              }
            }}
          >
            💡 Click on the <strong>right arrow (►)</strong> to expand companies, projects, and technologies!
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <CheckboxTree
            nodes={filteredTreeData}
            checked={checked}
            expanded={autoExpandedNodes}
            onCheck={setChecked}
            onExpand={setExpanded}
            showCheckbox={false}
            icons={{
              check: <Box className="rct-icon rct-icon-check" />,
              uncheck: <Box className="rct-icon rct-icon-uncheck" />,
              halfCheck: <Box className="rct-icon rct-icon-half-check" />,
              expandOpen: <KeyboardArrowDownIcon sx={{ fontSize: '1.6rem', color: '#1976d2' }} />,
              expandClose: <KeyboardArrowRightIcon sx={{ fontSize: '1.6rem', color: '#1976d2' }} />,
            }}
            showNodeIcon={false}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default ProjectsSkillsHierarchy;
