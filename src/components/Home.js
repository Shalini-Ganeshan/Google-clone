import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledLogoContainer,
} from "./Home.Styled";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchInput from "./SearchInput";

const Home = ({ toggleTheme }) => {
  const theme = useTheme(); // Get the current theme
  const [logoSrc, setLogoSrc] = useState(
    theme.palette.mode === "light"
      ? "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      : "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
  );
  const [appsIconColor, setAppsIconColor] = useState(
    theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff"
  );

  // Update logoSrc and appsIconColor when theme changes
  useEffect(() => {
    setLogoSrc(
      theme.palette.mode === "light"
        ? "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        : "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
    );
    setAppsIconColor(
      theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff"
    );
  }, [theme.palette.mode]);

  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledHeaderLeft>
          <Link to="/about" style={{ color: theme.palette.text.primary }}>
            About
          </Link>
          <Link to="/store" style={{ color: theme.palette.text.primary }}>
            Store
          </Link>
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <Link to="/gmail" style={{ color: theme.palette.text.primary }}>
            Gmail
          </Link>
          <Link to="/images" style={{ color: theme.palette.text.primary }}>
            Images
          </Link>
          <Tooltip title="Google apps">
            <IconButton>
              <AppsIcon
                data-testid="app-icon"
                sx={{ fontSize: "1.5rem", color: appsIconColor }} // Use appsIconColor state to dynamically set the color
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Google Account">
            <Avatar
              data-testid="header-avatar"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#8b0000",
                color: "white",
                cursor: "pointer",
                marginRight: "8px",
                padding:"5px"
              }}
            >
              SG
            </Avatar>
          </Tooltip>
        </StyledHeaderRight>
      </StyledHeaderWrapper>
      <StyledLogoContainer>
        <img src={logoSrc} alt="google-logo" />
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
    </StyledHeaderContainer>
  );
};

export default Home;
