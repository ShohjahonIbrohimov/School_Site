import React from "react";
import Header from "../Header";
import PageTabs from "../Reusable/PageTabs";
import Home from "../Home/Main";
import Users from "../Users/Main";
import Students from "../Students/Main";
import HandBook from "../HandBook/Main";

const Main = () => {
  const tabs = [
    {
      title: "Home",
      content: <Home />,
    },
    {
      title: "User",
      content: <Users />,
    },
    {
      title: "Students",
      content: <Students />,
    },
    {
      title: "Reports",
      content: <h1>Reports</h1>,
    },
    {
      title: "HandBook",
      content: <HandBook />,
    },
    {
      title: "Content",
      content: <h1>Content</h1>,
    },
    {
      title: "Other",
      content: <h1>Other</h1>,
    },
  ];

  return (
    <div className='container'>
      <Header />
      <PageTabs tabs={tabs} />
    </div>
  );
};

export default Main;
