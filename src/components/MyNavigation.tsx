import {
  AppstoreAddOutlined,
  CarryOutOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: "Today",
    key: "Today",
    icon: <CarryOutOutlined />,
    className: "menuItem",
  },
  {
    label: "Habit",
    key: "Habit",
    icon: <AppstoreAddOutlined />,
    className: "menuItem",
  },
  {
    label: "Dataview",
    key: "Dataview",
    icon: <BarChartOutlined />,
    className: "menuItem",
    children: [
      {
        type: "group",
        label: "Data",
        children: [
          {
            label: "DailyView",
            key: "day",
          },
          {
            label: "WeeklyView",
            key: "week",
          },
          {
            label: "MonthlyView",
            key: "month",
          },
          {
            label: "YearlyView",
            key: "year",
          },
        ],
      },
      {
        type: "group",
        label: "Statistics",
        className: "menuItem",
        children: [
          {
            label: "Coming soon",
            key: "setting:3",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    key: "Settings",
    icon: <SettingOutlined />,
    className: "menuItem",
  },
];

const MyNavigation = (props: { setPageView: any; className: string }) => {
  const className = props.className;
  const [current, setCurrent] = useState("mail");
  const menuStyle = {
    itemHoverStyle: {
      backgroundColor: "red",
    },
  };
  const onClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    props.setPageView(e.key);
  };

  return (
    <Menu
      className={className}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MyNavigation;
