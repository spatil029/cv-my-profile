import React, { useEffect, useState } from 'react';
import { Typography, Box, Container, LinearProgress, Paper, Divider, ToggleButtonGroup, ToggleButton, Grid, Card, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { 
  SiAngular, 
  SiReact, 
  SiNodedotjs, 
  SiDotnet, 
  SiTypescript,
  SiJest
} from 'react-icons/si';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function Skills() {
  const skillsData = [
    { name: 'C# & MVC', level: 90, color: '#2196f3', icon: <CodeIcon sx={{ color: '#239120', fontSize: '1.2rem' }} /> },
    { name: 'MS SQL', level: 85, color: '#f50057', icon: <StorageIcon sx={{ color: '#CC2927', fontSize: '1.2rem' }} /> },
    { name: 'jQuery/Angular', level: 80, color: '#ff9800', icon: <SiAngular style={{ color: '#DD0031', fontSize: '1.2rem' }} /> },
    { name: 'React.JS', level: 85, color: '#00bcd4', icon: <SiReact style={{ color: '#61DAFB', fontSize: '1.2rem' }} /> },
    { name: 'Web API', level: 88, color: '#4caf50', icon: <SiDotnet style={{ color: '#512BD4', fontSize: '1.2rem' }} /> },
    { name: '.Net Core/NodeJS', level: 82, color: '#9c27b0', icon: <SiNodedotjs style={{ color: '#339933', fontSize: '1.2rem' }} /> },
    { name: 'TypeScript', level: 75, color: '#ff9800', icon: <SiTypescript style={{ color: '#3178C6', fontSize: '1.2rem' }} /> },
    { name: 'Unit Testing', level: 75, color: '#ff5722', icon: <SiJest style={{ color: '#C21325', fontSize: '1.2rem' }} /> }
  ];

  const [skills, setSkills] = useState(skillsData.map(skill => ({ ...skill, animatedLevel: 0 })));
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'tiles'

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills(prevSkills => {
        return prevSkills.map(skill => {
          if (skill.animatedLevel < skill.level) {
            return { ...skill, animatedLevel: Math.min(skill.animatedLevel + 1, skill.level) };
          }
          return skill;
        });
      });
    }, 20); // Adjust the speed of the animation here

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const renderStars = (level) => {
    const filledStars = Math.round(level / 20); // 5 stars max, each star represents 20%
    const emptyStars = 5 - filledStars;

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon key={index} sx={{ color: 'gold' }} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorderIcon key={index} />
        ))}
      </Box>
    );
  };

  const handleViewChange = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  // Prepare data for individual skill pie chart
  const getSkillPieData = (skill) => {
    const skillLevel = Math.max(0, Math.min(100, skill.animatedLevel)); // Ensure between 0-100
    const remaining = Math.max(0, 100 - skillLevel);
    
    // First segment: skill level (colored), Second segment: remaining (gray)
    // Order matters - first item renders first (clockwise from startAngle)
    return [
      { 
        name: skill.name, 
        value: skillLevel, 
        color: skill.color,
        fill: skill.color 
      },
      { 
        name: 'Remaining', 
        value: remaining, 
        color: '#e0e0e0',
        fill: '#e0e0e0'
      }
    ];
  };


  return (
    <Box component="section" className="skills" sx={{ height: '100%' }}>
      <Container maxWidth="lg" sx={{ p: 0, height: '100%' }}>
        <Box sx={{ 
          py: 1.5,
          px: 2,
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
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
            Technical Skills
          </Typography>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewChange}
            aria-label="view mode"
            size="small"
          >
            <ToggleButton value="list" aria-label="list view">
              <ViewListIcon sx={{ fontSize: '1.2rem', mr: 0.5 }} />
              List
            </ToggleButton>
            <ToggleButton value="tiles" aria-label="tiles view">
              <ViewModuleIcon sx={{ fontSize: '1.2rem', mr: 0.5 }} />
              Tiles
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Paper elevation={0} sx={{ 
          p: viewMode === 'tiles' ? 2 : 0, 
          height: 'calc(100% - 52px)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto'
        }}>
          {viewMode === 'list' ? (
            // List View with Bar Charts (LinearProgress)
            <>
              {skills.map((skill, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: 2,
                    py: 1.05,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.01)'
                    }
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 0.7
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                        {skill.icon}
                        <Typography 
                          variant="body1"
                          sx={{ 
                            fontWeight: 500,
                            color: '#333',
                            fontSize: '0.7rem'
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: skill.color,
                          minWidth: '40px',
                          textAlign: 'right',
                          fontSize: '0.63rem',
                          fontWeight: 500
                        }}
                      >
                        {skill.animatedLevel}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.animatedLevel}
                      sx={{
                        height: 5.6,
                        borderRadius: 4,
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skill.color,
                          borderRadius: 4
                        }
                      }}
                    />
                    {renderStars(skill.level)}
                  </Box>
                  {index < skills.length - 1 && (
                    <Divider sx={{ my: 0 }} />
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            // Tiles View with Pie Chart
            <Grid container spacing={0.84}>
              {skills.map((skill, index) => {
                const pieData = getSkillPieData(skill);
                
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card 
                      elevation={2}
                      sx={{ 
                        height: '100%',
                        position: 'relative',
                        overflow: 'visible'
                      }}
                    >
                      <CardContent sx={{ p: 0.84 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.56 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.42, width: '100%' }}>
                            {skill.icon}
                            <Typography variant="body2" sx={{ fontWeight: 600, flex: 1, fontSize: '0.595rem' }}>
                              {skill.name}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: skill.color,
                                fontWeight: 700,
                                fontSize: '0.595rem'
                              }}
                            >
                              {skill.animatedLevel}%
                            </Typography>
                          </Box>
                          
                          <Box sx={{ 
                            width: '100%', 
                            height: 73.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            minHeight: 73.5
                          }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={pieData}
                                  cx="50%"
                                  cy="50%"
                                  startAngle={90}
                                  endAngle={-270}
                                  labelLine={false}
                                  outerRadius={29.4}
                                  innerRadius={17.5}
                                  dataKey="value"
                                  animationBegin={0}
                                  animationDuration={600}
                                  isAnimationActive={true}
                                >
                                  {pieData.map((entry, idx) => (
                                    <Cell 
                                      key={`cell-${idx}-${entry.name}-${skill.name}`} 
                                      fill={entry.fill || entry.color}
                                      stroke="none"
                                    />
                                  ))}
                                </Pie>
                              </PieChart>
                            </ResponsiveContainer>
                            <Box sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              pointerEvents: 'none'
                            }}>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  color: skill.color,
                                  fontWeight: 700,
                                  fontSize: '0.77rem'
                                }}
                              >
                                {skill.animatedLevel}%
                              </Typography>
                            </Box>
                          </Box>
                          {renderStars(skill.level)}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default Skills;
