import React from "react";
import UsersTable from "../Reusable/UsersTable";

const data = [
  {
    no: "1",
    fish: "John Brown",
    school: "SCHOOL 45",
    class: "6G",
    balance: "900 rub.",
  },
];

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    width: "5%",
  },
  {
    title: "F.I.SH",
    dataIndex: "fish",
    key: "fish",
    width: "20%",
  },
  {
    title: "School",
    dataIndex: "school",
    key: "school",
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
    width: "10%",
  },
];

const Main = () => {
  return (
    <div>
      <UsersTable columns={columns} data={data} />
    </div>
  );
};

export default Main;
