import { Tabs } from "antd";
const { TabPane } = Tabs;

const PageTabs = ({ tabs }) => (
  <Tabs defaultActiveKey='0' className='page_tabs' centered>
    {tabs.map((item, index) => (
      <TabPane tab={item.title} key={index}>
        {item.content}
      </TabPane>
    ))}
  </Tabs>
);

export default PageTabs;
