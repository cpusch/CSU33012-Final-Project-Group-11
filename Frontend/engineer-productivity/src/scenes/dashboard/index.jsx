import {Box, Button, IconButton, Link, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Divider from '@mui/material/Divider';
import {createTheme, styled} from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';


const images = [
  {
    url: '../../assets/barchart.png',
    title: 'Commits',
    width: '50%',
    href:'http://localhost:3000/commits',
  },
  {
    url: '../../assets/issues.png',
    title: 'Issues',
    width: '50%',
    href:'http://localhost:3000/issues',
  },
  {
    url: '../../assets/GitHub-logo.png',
    title: 'Pull',
    width: '50%',
    href:'http://localhost:3000/pull',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

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
                FEATURES
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Explore the different metrics to measure a team’s performance that is working on a project, in order to gain insights on where they are doing well and where they can improve!
              </Typography>
            </Box>
          </Box>
            <Box
            mt="30px"
            p="0 1px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 500, width: '100%' }}>
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                href={image.href}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
          </Box>
          <Box padding="20px 300px">
          <Button href="http://localhost:3000/team" color={"success"} variant="contained" disableElevation>
              <Typography
                variant="h6"
                fontWeight="800"
                color={colors.grey[100]}
              >
                Meet The Team
              </Typography>
          </Button>
          </Box>
        </Box>
        <Box
          gridColumn="1/span 1"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          style={{borderRadius: "3%" }}
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
                variant="h3"
                fontWeight="800"
                color={colors.grey[100]}
              >
                GROUP DESCRIPTION
                <Link href="http://localhost:3000/about" padding="19px" underline="hover"  color={colors.greenAccent[500]} variant="h5" fontWeight="600">
              {'More'}
              </Link>
              </Typography>
              <Typography
                mt="20px"
                variant="h5"
                fontFamily="Helvetica Neue"
                color={colors.grey[100]}
              >
                This application measures the performance of a software team working on a project, using Github as their collaboration tool! We explore key metrics of the team including number of commits and pull requests, and identify inefficiencies through the visualization of Github issues being resolved. 
                The goal of these metrics is for the team to evaluate their performance, and generate insights into where they are doing well and where they can improve.
              </Typography>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
