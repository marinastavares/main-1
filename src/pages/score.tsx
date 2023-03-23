import Form from "@/components/Form";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      suggestedMax: 100,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Waf Attack Score",
    },
  },
};

const labels = ["Score", "XSS Score", "SQLI Score", "RCE Score"];

export enum BAR_WAF_CHART_BUCKETS {
  ATTACK = "attack",
  LIKELY_ATTACK = "likely_attack",
  LIKELY_CLEAN = "likely_clean",
  CLEAN = "clean",
  NOT_SCORED = "not_scored",
}

export const wafScoreThresholds = {
  [BAR_WAF_CHART_BUCKETS.ATTACK]: {
    geq: 1,
    leq: 20,
  },
  [BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK]: {
    geq: 21,
    leq: 50,
  },
  [BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN]: {
    geq: 51,
    leq: 80,
  },
  [BAR_WAF_CHART_BUCKETS.CLEAN]: {
    geq: 81,
    leq: 99,
  },
};

export const getThresholdForScore = (score: number) =>
  Object.keys(wafScoreThresholds).find(
    (threshold) =>
      score >= wafScoreThresholds[threshold].geq &&
      score <= wafScoreThresholds[threshold].leq
  );

// case BAR_WAF_CHART_BUCKETS.CLEAN: #104122
// case BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN: #2db35e
// case BAR_WAF_CHART_BUCKETS.ATTACK: #780a02
// case BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK: #fc574a

const example = {
  "waf.score": 10,
  "waf.xss.score": 25,
  "waf.spli.score": 75,
  "waf.rce.score": 99,
};

export default function Home() {
  console.log("\n🚀 -> example:", getThresholdForScore(example["waf.score"]));
  const renderData = useMemo(() => {
    const currentValues = Object.values(example).map((value) =>
      getThresholdForScore(value)
    );

    const getDataType = (type) =>
      Object.values(example).map((value) =>
        getThresholdForScore(value) === type ? value : 0
      );
    return {
      labels,
      datasets: [
        {
          label: "Clean",
          data: getDataType(BAR_WAF_CHART_BUCKETS.CLEAN),
          backgroundColor: "#104122",
        },
        {
          label: "Likely Clean",
          data: getDataType(BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN),
          backgroundColor: "#2db35e",
        },
        {
          label: "Likely Attack",
          data: getDataType(BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK),
          backgroundColor: "#780a02",
        },
        {
          label: "Attack",
          data: getDataType(BAR_WAF_CHART_BUCKETS.ATTACK),
          backgroundColor: "#fc574a",
        },
      ],
    };
  }, []);

  return (
    <Box
      display="flex"
      my="150px"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Bar options={options} data={renderData} />
    </Box>
  );
}
