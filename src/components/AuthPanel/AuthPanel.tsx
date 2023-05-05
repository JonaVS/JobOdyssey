import { useState } from "react";
import { Center, Tabs } from "@mantine/core";
import Image from "next/image";
import AuthForm from "../AuthForm/AuthForm";
import useStyles from "./AuthPanel.styles";
import logo from "../../../public/logo.png"

const tabs = [{id: 1, value: "Login" }, {id: 2, value: "Register" }];

function AuthPanel() {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>("Login");

  return (
    <Center className={classes.centerContainer}>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        className={classes.authFormContainer}
      >
        <Image
          className={classes.logo}
          src={logo}
          alt="App logo"
          placeholder="blur"
        />
        <Tabs.List className={classes.tabList}>
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.id} className={classes.tab} value={tab.value}>
              {tab.value}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <AuthForm isLogin={activeTab === "Login"} />
      </Tabs>
    </Center>
  );
}

export default AuthPanel;
