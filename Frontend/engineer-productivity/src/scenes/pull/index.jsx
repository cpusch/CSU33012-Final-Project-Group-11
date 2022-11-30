import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineCharts";

const Pull = () => {
  return (
    <Box m="20px">
      <Header title="PULL" subtitle="This our pull function" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Pull;