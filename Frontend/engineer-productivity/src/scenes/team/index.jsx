import {Box, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="There are our team member" />
      </Box>
         <Box
          gridColumn="span 12"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{borderRadius: "2%" }}
        >
    <Card sx={{ maxWidth: 500, width:282}}>
      <CardActionArea>
        <CardMedia
          component="img"

          height="200"
          image="../../assets/E.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Emils Vasilis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team Leader
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/D.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Daniel Madaghjian
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Computer Science and Business
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Infrastructure Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

 <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/C.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Constantin Pusch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Computer Science and Business
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Infrastructure Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

     <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/L.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Zhongyuan Liu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frontend Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       </Box>
      <Box
          mt="20px"
          gridColumn="span 12"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{borderRadius: "2%" }}
        >
          <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/AU.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Austeja Pakulyte
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frontend Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/m.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Maham Fatima
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frontend Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/A.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Abigail Amethyst
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Backend Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../../assets/S.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Steven Bondaruk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Integrated Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Backend Team
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      </Box>
    </Box>
  )
}

export default Team;