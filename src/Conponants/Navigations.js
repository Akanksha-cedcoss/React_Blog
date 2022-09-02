import React from "react";
import "./Navigation.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";

const Navigations = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <div className="navContent">
        <div className="logo">
          <img
            src="https://www.originalbuddhas.com/images/Logo-kleur-header.png"
            alt="original buddhas"
          />
        </div>

        <div className="navItem">
          <ul value={value}>
            {/* <li>ALL BLOGS</li>
            <li>MY BLOGS</li> */}

            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value="one"
                  label="ALL BLOGS"
                  wrapped
                />
                <Tab value="two" label="MY BLOGS" />
              </Tabs>
            </Box>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
