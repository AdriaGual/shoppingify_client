import { useQuery } from "@tanstack/react-query";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getNumberItemsByMonth } from "../api/lists";
import Error from "./Error";
import Loading from "./Loading";
import StatisticsTopItemsCategories from "./StatisticsTopItemsCategories";

function StatisticsSummary() {
  const { data, error, isLoading } = useQuery(["items_by_month"], () =>
    getNumberItemsByMonth()
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="my-14 mx-20 space-y-12 w-2/3 px-20">
      <StatisticsTopItemsCategories></StatisticsTopItemsCategories>
      <div className="font-semibold text-2xl mb-12">Monthly summary</div>

      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#F9A109"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default StatisticsSummary;
