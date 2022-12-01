import {Box, Button, IconButton, Link, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CommitIcon from '@mui/icons-material/Commit';
import TimelineIcon from '@mui/icons-material/Timeline';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


    return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" subtitle="Welcome to our Homepage" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="185px"
        gap="25px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3.5"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{borderRadius: "3%" }}
        >
          <StatBox
            title=" Hi there! Welcome to our project!"
            subtitle="Group 11"
            icon={
              <img
              alt="profile"
              width="300px"
              height="100px"
              src={`../../assets/trinityLogo.png`}
              style={{ cursor: "pointer", borderRadius: "10%" }}
              />
              }
          />
        </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 11"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          style={{borderRadius: "1.5%" }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h2"
                fontWeight="800"
                color={colors.grey[100]}
              >
                PROJECT DESCRIPTION
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Github
              </Typography>
              
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="1/span 1"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          style={{borderRadius: "3%" }}
        >

          <List
              sx={{
                width: '100%',
                maxWidth: 500,
              }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CommitIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Commits" secondary="Feature Info:xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
            </ListItem>
            <Divider variant="x" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Issues" secondary="Feature Info:xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
            </ListItem>
            <Divider variant="x" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GitHubIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Pull" secondary="Feature Info:xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
            </ListItem>
            
            <Divider variant="x" component="li" />
          </List>
          <Link href="http://localhost:3000/about" padding="100px" underline="hover"  color={colors.grey[100]} variant="h4" fontWeight="600">
            {'Learn More'}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;