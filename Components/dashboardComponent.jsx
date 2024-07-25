import Image from "next/image";
import briefcase from "../public/assets/briefcase.png";
import check from "../public/assets/check.png";
import graph from "../public/assets/graph.png";
import like from "../public/assets/like.png";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const COLORS = ["gray", "yellow", "blue", "green", "red"];

const pieData = [
  {
    name: "Pending",
    value: 60,
  },
  {
    name: "Processing",
    value: 0,
  },
  {
    name: "Ready to Deliver",
    value: 40,
  },
  {
    name: "Delivered",
    value: 0,
  },
  {
    name: "Returned",
    value: 0,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffff",
          padding: "5px",
          border: "1px solid #cccc",
        }}
      >
        <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
      </div>
    );
  }
  return null;
};

function DashboardComponenet() {
  return (
    <>
      <div className="featured">
        <div className="featureItem me-2 ">
          <div className="p-2 d-flex justify-content-between py-3">
            <div className=" flex-column">
              <div className="featureTitle">4</div>
              <div className="featureTitle" style={{ fontSize: "8px" }}>
                Pending Orders
              </div>
            </div>

            <div className="featureSub">
              <Image
                src={briefcase}
                alt=""
                height={30}
                width={30}
                className="right-icon"
              />
            </div>
          </div>
        </div>

        <div className="featureItem me-2">
          <div className="p-2 d-flex justify-content-between py-3">
            <div className=" flex-column">
              <div className="featureTitle">0</div>
              <div className="featureTitle" style={{ fontSize: "8px" }}>
                Processing Orders
              </div>
            </div>

            <div className="featureSub">
              <Image
                src={graph}
                alt=""
                height={30}
                width={30}
                className="right-icon"
              />
            </div>
          </div>
        </div>

        <div className="featureItem me-2">
          <div className="p-2 d-flex justify-content-between py-3">
            <div className=" flex-column">
              <div className="featureTitle">3</div>
              <div className="featureTitle" style={{ fontSize: "8px" }}>
                Ready to Deliver
              </div>
            </div>

            <div className="featureSub">
              <Image
                src={like}
                alt=""
                height={30}
                width={30}
                className="right-icon"
              />
            </div>
          </div>
        </div>

        <div className="featureItem ">
          <div className="p-2 d-flex justify-content-between py-3">
            <div className=" flex-column">
              <div className="featureTitle">0</div>
              <div className="featureTitle" style={{ fontSize: "8px" }}>
                Delivered Orders
              </div>
            </div>

            <div className="featureSub">
              <Image
                src={check}
                alt=""
                height={30}
                width={30}
                className="right-icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12  d-flex justify-content-between ">
          <div className="col-md-6 feature-border me-2">
            <div className="featureItem ">
              <div className="featureTitle px-2 py-2">Today's Delivery</div>
            </div>
            <div className="p-2 d-flex justify-content-between "></div>
          </div>
          <div className="col feature-border ">
            <div className="featureItem px-2">
              <div className="featureTitle px-2 py-2">OrderView</div>
            </div>

            <div className="p-2 d-flex justify-content-center">
              <PieChart width={250} height={300}>
                <Legend />

                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardComponenet;
