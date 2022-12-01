import {Box, useTheme, Typography} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EXPERIENCE" subtitle="Explore how we got on with the project!" />
      </Box>

      {/* GRID & CHARTS */}
      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="185px"
        gap="25px"
      > */}

        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{borderRadius: "2%" }}
        >
          <Box>
              
              
              <Typography
                variant="h2"
                fontWeight="800"
                color={colors.grey[100]}
              >Team</Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
              <h5>Our team consisted of 8 students, studying either Computer Science and Business or Computer Science in Trinity College Dublin. We split up the team into 3 sub-teams:</h5>
              <ul>
                <li>Frontend Team</li>
                <li>Backend Team</li>
                <li>Infrastructure Team</li>
              </ul> 
              </Typography>

              <Typography
                variant="h2"
                fontWeight="800"
                color={colors.grey[100]}
              >Collaboration</Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
              <h5>We utilized GitHub as the platform to collaborate on our code. We made efficient use of the various features provided on GitHub such as the use of branching to add new features and fix bugs as well 
              as GitHub Issues to track what needs to be done and to overall set milestones and goals throughout the process of the project. <a href="https://github.com/cpusch/CSU33012-Final-Project-Group-11"> You can find the repository here</a></h5>
              </Typography>
              <Typography
                variant="h2"
                fontWeight="800"
                color={colors.grey[100]}
              >Languages and tools used</Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
              <h5>The backend team used Python to retrieve data from a GitHub repository. They utilized the GitHub API to extract relevant data related to the features we desired to implement for the project. </h5>
              <h5>The frontend team used JavaScript and React to get the data retrieved from the backend, and populates the graphs and charts related to the metrics we are visualizing. </h5>
              <h5>The Infrastructure Team were in charge of integrating the code between these two teams and providing a CI/CD Workflow, whilst simultaneously managing the GitHub repository. </h5>
              </Typography>
            </Box>
        </Box>
      {/* </Box> */}
    </Box>
  )
}

export default About;