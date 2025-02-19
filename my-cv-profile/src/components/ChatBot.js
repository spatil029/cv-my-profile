import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  Paper, 
  Typography,
  Avatar,
  Fab
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const chatbotData = {
  "greetings": "Hello! I'm Sahadev's AI assistant. How can I help you today?",
  "skills": "I am proficient in .NET, React, Angular, Node.js, and SQL Server with 9.5+ years of experience.",
  "experience": "I have worked at companies like IQVIA, Mindtree, and STP Investment Services, focusing on healthcare and finance domains. I have total 9.5+ years of experience.",
  "education": "I completed my Post Graduation in Computer Science( MCA) from Karnatak University, Dharwad.",
  "projects": "I have worked on multiple enterprise-level applications in Healthcare and Finance domains.",
  "contact": "You can reach me through the contact section in my portfolio.",
  
  // Technical Skills
  "dotnet": "I have extensive experience in .NET development including .NET Core, MVC, Web API, and Entity Framework.",
  "react": "I'm proficient in React.js, including hooks, context API, Redux, and modern React practices. I have worked on multiple projects using React for 3 years.",
  "angular": "I have worked with Angular framework, building scalable single-page applications. I have worked on multiple projects using Angular for 2 years.",
  "database": "I'm experienced in SQL Server, database design, optimization, and writing complex queries. I have worked on multiple projects using SQL Server for 9 years.",
  "frontend": "My frontend skills include React.js, Angular, jQuery, HTML5, CSS3, and modern JavaScript.",
  "backend": "On the backend, I work with .NET Core, Node.js, RESTful APIs, and microservices architecture. I have worked on multiple projects using Node.js for 2 years. I have worked on multiple projects using .NET Core for 7 years. I have worked on multiple projects using .NET Framework for 9 years.",
  "azure": "I have experience with Azure services, including Azure Functions, Azure SQL, and Azure DevOps.",
  "total_experience": "I have 9.5+ years of experience in the IT industry.",
  ".Net core": "I have worked on multiple projects using .NET Core for 7 years.",
  ".Net framework": "I have worked on multiple projects using .NET Framework for 9 years.",
  "Node.js": "I have worked on multiple projects using Node.js for 2 years.",
  
  // Project Details
  "healthcare_projects": "In healthcare, I've worked on patient management systems, clinical trial platforms, and healthcare data analytics solutions.",
  "finance_projects": "In finance, I've developed investment management platforms, trading systems, and financial reporting applications.",
  "recent_project": "My recent project involved developing a clinical trial management system using .NET Core and React.",
  
  // Work Experience Details
  "iqvia": "At IQVIA, I work as a Senior Software Developer, focusing on healthcare technology solutions.",
  "mindtree": "At Mindtree, I served as a Module Lead, managing teams and delivering enterprise solutions.",
  "stp": "At STP Investment Services, I developed financial software solutions.",
  "years_of_experience":" I have total 9.5+ years of experience in .Net fullstack",
  // Technical Expertise
  "architecture": "I have experience in designing scalable applications using microservices architecture and cloud technologies.",
  "testing": "I implement unit testing, integration testing, and follow TDD practices using tools like xUnit and Jest.",
  "agile": "I follow Agile methodologies, participating in daily standups, sprint planning, and retrospectives.",
  "cloud": "I work with cloud technologies including Azure services and AWS.",
  
  // Soft Skills
  "leadership": "I have experience leading development teams, mentoring junior developers, and driving technical decisions.",
  "communication": "I excel in both technical and business communication, working effectively with stakeholders.",
  "problem_solving": "I have strong analytical and problem-solving skills, with a focus on delivering efficient solutions.",
  
  // Career Goals
  "goals": "I aim to continue growing as a technical leader while staying hands-on with modern technologies.",
  "interests": "I'm particularly interested in cloud architecture, microservices, and building scalable applications.",
  
  // Personal Projects
  "side_projects": "I work on personal projects to explore new technologies and contribute to open source when possible.",
  "learning": "I'm currently learning about AI/ML integration in web applications and cloud-native development.",
  //
  "notice period": "I am looking for a new opportunity. My notice period is 30 days. I can join Immidiatly within 4 weeks.",
  // Default response
  "default": "I'm not sure about that. You can ask me about my technical skills, work experience, projects, or specific technologies I work with."
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: chatbotData.greetings, sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    const response = generateResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);

    setInput('');
  };

  const generateResponse = (input) => {
    input = input.toLowerCase();
    
    // Check for specific keywords in the input
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return chatbotData.skills;
    } else if (input.includes('experience') || input.includes('work history')) {
      return chatbotData.experience;
    } else if (input.includes('education') || input.includes('study')) {
      return chatbotData.education;
    } else if (input.includes('project')) {
      if (input.includes('health') || input.includes('clinical')) {
        return chatbotData.healthcare_projects;
      } else if (input.includes('finance') || input.includes('banking')) {
        return chatbotData.finance_projects;
      } else if (input.includes('recent')) {
        return chatbotData.recent_project;
      }
      return chatbotData.projects;
    } else if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return chatbotData.contact;
    } else if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return chatbotData.greetings;
    } else if (input.includes('.net') || input.includes('dotnet')) {
      return chatbotData.dotnet;
    } else if (input.includes('react')) {
      return chatbotData.react;
    } else if (input.includes('angular')) {
      return chatbotData.angular;
    } else if (input.includes('database') || input.includes('sql')) {
      return chatbotData.database;
    } else if (input.includes('frontend') || input.includes('front-end')) {
      return chatbotData.frontend;
    } else if (input.includes('backend') || input.includes('back-end')) {
      return chatbotData.backend;
    } else if (input.includes('iqvia')) {
      return chatbotData.iqvia;
    } else if (input.includes('mindtree')) {
      return chatbotData.mindtree;
    } else if (input.includes('stp')) {
      return chatbotData.stp;
    } else if (input.includes('architecture')) {
      return chatbotData.architecture;
    } else if (input.includes('test')) {
      return chatbotData.testing;
    } else if (input.includes('agile')) {
      return chatbotData.agile;
    } else if (input.includes('cloud')) {
      return chatbotData.cloud;
    } else if (input.includes('lead') || input.includes('leadership')) {
      return chatbotData.leadership;
    } else if (input.includes('communication')) {
      return chatbotData.communication;
    } else if (input.includes('problem') || input.includes('solving')) {
      return chatbotData.problem_solving;
    } else if (input.includes('goal')) {
      return chatbotData.goals;
    } else if (input.includes('interest')) {
      return chatbotData.interests;
    } else if (input.includes('side') || input.includes('personal project')) {
      return chatbotData.side_projects;
    } else if (input.includes('learn')) {
      return chatbotData.learning;
    }
    
    return chatbotData.default;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Fab 
        color="primary" 
        aria-label="chat"
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </Fab>

      {/* Chat Window */}
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            position: 'fixed',
            bottom: 90,
            right: 20,
            width: { xs: '90%', sm: 350 },
            maxWidth: '100%',
            height: 500,
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              p: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SmartToyIcon />
            <Typography variant="h6">Chat Assistant</Typography>
          </Box>

          {/* Messages Area */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              backgroundColor: '#f5f5f5'
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <SmartToyIcon />
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: '75%',
                    backgroundColor: message.sender === 'user' ? 'primary.main' : 'white',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="body2">{message.text}</Typography>
                </Paper>
                {message.sender === 'user' && (
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <PersonIcon />
                  </Avatar>
                )}
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              p: 2,
              backgroundColor: 'white',
              borderTop: '1px solid #e0e0e0',
              display: 'flex',
              gap: 1
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
            <IconButton 
              color="primary" 
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}

export default ChatBot; 