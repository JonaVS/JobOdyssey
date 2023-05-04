import { useState } from "react";
import { Center, Tabs, Title } from "@mantine/core";
import AuthForm from "../AuthForm/AuthForm";
import useStyles from "./AuthPanel.styles";

const tabs = [{ value: "Login" }, { value: "Register" }];

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
        <Title className={classes.title}>Job Odyssey</Title>
        <Tabs.List className={classes.tabList}>
          {tabs.map((tab) => (
            <Tabs.Tab className={classes.tab} value={tab.value}>
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
