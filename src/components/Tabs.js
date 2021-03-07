import { Tabs } from "antd";

const { TabPane } = Tabs;

const tabItems = [
  {
    title: "Home",
    content: <h1>Home</h1>,
  },
  {
    title: "User",
    content: <h1>User</h1>,
  },
  {
    title: "Students",
    content: <h1>Students</h1>,
  },
  {
    title: "Reports",
    content: <h1>Reports</h1>,
  },
  {
    title: "Directories",
    content: <h1>Directories</h1>,
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

const PageTabs = () => (
  <Tabs defaultActiveKey='1' className='page_tabs'>
    {tabItems.map((item, index) => (
      <TabPane tab={item.title} key={index}>
        {item.content}
      </TabPane>
    ))}
  </Tabs>
);

export default PageTabs;
