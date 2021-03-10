import React from "react";
import { Button, Space } from "antd";
import PageTabs from "../Reusable/PageTabs";
import UsersTable from "../Reusable/UsersTable";
import NutritionCategory from "./NutritionCategory.json";

const footerActions = (
  <Space>
    <Button shape='round'>New</Button>
    <Button shape='round'>Edit</Button>
    <Button shape='round'>Delete</Button>
  </Space>
);
const tabs = [
  {
    title: "Nutrition Category",
    content: (
      <UsersTable
        footer={footerActions}
        columns={NutritionCategory}
        data={[]}
      />
    ),
  },
  {
    title: "School",
    content: (
      <UsersTable
        footer={footerActions}
        columns={NutritionCategory}
        data={[]}
      />
    ),
  },
  {
    title: "Meal time",
    content: (
      <UsersTable
        footer={footerActions}
        columns={NutritionCategory}
        data={[]}
      />
    ),
  },
  {
    title: "Class matching",
    content: (
      <UsersTable
        footer={footerActions}
        columns={NutritionCategory}
        data={[]}
      />
    ),
  },
];

const Main = () => {
  return (
    <div>
      <PageTabs tabs={tabs} />
    </div>
  );
};

export default Main;
