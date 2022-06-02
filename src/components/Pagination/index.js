import React from "react";

import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const index = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <div
      className=""
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default index;
