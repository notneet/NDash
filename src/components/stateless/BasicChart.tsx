"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  chart: {
    type: "area",
    backgroundColor: "#343434",
    width: 850,
    height: 450,
  },
  title: {
    text: "How much data in last 3 days",
    align: "left",
    style: {
      color: "#FCFAF1",
    },
  },
  subtitle: {
    text: "Source: <a href='#'>localhost</a>",
    align: "left",
    style: {
      color: "#FCFAF1",
    },
  },
  legend: {
    itemStyle: {
      color: "#FCFAF1",
    },
    itemHoverStyle: {
      color: "#CACACA",
    },
  },
  xAxis: {
    categories: ["10 May", "11 May", "12 May"],
    crosshair: true,
    labels: {
      style: {
        color: "#FCFAF1",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Data Count",
      style: {
        color: "#FCFAF1",
      },
    },
    labels: {
      style: {
        color: "#FCFAF1",
      },
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      type: "column",
      name: "Media 1",
      data: [1, 2, 3],
      color: "#65B741",
    },
    {
      type: "column",
      name: "Media 2",
      data: [2, 3, 4],
      color: "#FDDE55",
    },
  ],
};

export const Chart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
