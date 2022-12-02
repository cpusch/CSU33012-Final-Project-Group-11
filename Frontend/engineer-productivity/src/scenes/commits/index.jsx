import { Box } from "@mui/material";
import Header from "../../components/Header";
import CommitBarChart from "../../components/BarChart";
import CommitLineChart from "../../components/LineCharts";

const Commits = () => {
  return (
    <Box m="20px">
      <Header title="COMMITS" subtitle="Visualizations of the commits made by the team, measured per month over the last 4 months, represented by a bar chart and a line chart" />
      <Box height="75vh">
        <CommitBarChart />
          <CommitLineChart />
      </Box>
    </Box>
  );
};

export default Commits;