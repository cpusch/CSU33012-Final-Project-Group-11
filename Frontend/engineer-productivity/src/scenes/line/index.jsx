import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineCharts";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Pull" subtitle="" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;