import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const requests = [
  {
    title: "This is a title",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quassed nesciunt ipsam nobis amet! Est incidunt qui distincti    asperiores nihil laboriosam voluptates corrupti ab dolores accusamus. Magni, aut",
  },
  {
    title: "This is a title",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quassed nesciunt ipsam nobis amet! Est incidunt qui distincti    asperiores nihil laboriosam voluptates corrupti ab dolores accusamus. Magni, aut",
  },
  {
    title: "This is a title",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quassed nesciunt ipsam nobis amet! Est incidunt qui distincti    asperiores nihil laboriosam voluptates corrupti ab dolores accusamus. Magni, aut",
  },
];

const SupportRequests = () => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <h2>Request List</h2>
      <Collapse defaultActiveKey={["1"]} bordered>
        {requests.map((r, i) => (
          <Panel header={r.title} key={i}>
            <p>{r.content}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default SupportRequests;
