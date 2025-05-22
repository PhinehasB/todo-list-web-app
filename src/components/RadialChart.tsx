"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { TaskType } from "@/app/Types/TaskTypes";

type RadialChartType = Pick<TaskType, "status"> & {
  count: number;
  total: number;
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    // color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export default function RadialChart({ status, count, total }: RadialChartType) {
  const statusCheck = function () {
    let color: string = "";
    let bgColor: string = "";
    switch (status) {
      case "Completed":
        color = "var(--chart-2)";
        bgColor = "bg-[var(--chart-2)]";
        break;
      case "In progress":
        color = "var(--chart-1)";
        bgColor = "bg-[var(--chart-1)]";
        break;
      case "Not started":
        color = "var(--chart-5)";
        bgColor = "bg-[var(--chart-5)]";
        break;
      default:
        color = "var(--chart-2)";
        bgColor = "bg-[var(--chart-2)]";
        break;
    }
    return {
      color,
      bgColor,
    };
  };

  const chartData = [
    { browser: "safari", visitors: count, fill: statusCheck().color },
  ];

  return (
    <div>
      {" "}
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square  max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={(-270 * count) / total}
          innerRadius={58}
          outerRadius={90}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[62, 50]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {chartData[0].visitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-lg"
                      >
                        {`/ ${total}`}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <div className="flex justify-center items-center gap-1">
        <div
          className={cn("rounded-full h-3 w-3", statusCheck().bgColor)}
        ></div>
        <p className="font-bold text-lg">{status}</p>
      </div>
    </div>
  );
}
