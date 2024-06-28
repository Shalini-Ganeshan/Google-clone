import {React,useState,useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import { Tooltip, IconButton } from "@mui/material";
import {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledLogo,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
  StyledHeaderRight,
} from "./SearchPage.Styled";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import useSearch from "../hooks/useSearch";
import { useTheme } from "@mui/material/styles";

const SearchPage = ({ toggleTheme }) => {
  const theme = useTheme();
  const { search } = useLocation();
  const searchTerm = search?.split("?")[1];
  const { data } = useSearch(searchTerm);
  const [appsIconColor, setAppsIconColor] = useState(
    theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.78)" : "#fff"
  );

  useEffect(() => {
   
    setAppsIconColor(
      theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.78)" : "#fff"
    );
  }, [theme.palette.mode]);


  const lightModeLogoSrc = "https://th.bing.com/th/id/R.4ea7270debc77a8076d7311678d0bc03?rik=Bi9pCWbE%2fRfGOw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG102344.png&ehk=EorSmHw0%2fNpg4ZEsf%2bHWy5dYWFhVQhy2e6Kjj6JeEj0%3d&risl=&pid=ImgRaw&r=0";
  const darkModeLogoSrc = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png";

  // Determine logo source based on theme mode
  const logoSrc = theme.palette.mode === "light" ? lightModeLogoSrc : darkModeLogoSrc;

  return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchHeader>
        <StyledHeaderLeft>
          <Link to='/'>
            <StyledLogo
              src={logoSrc}
              alt='googlelogo'
           
            />
          </Link>
          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              <StyledOptions>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </StyledOptions>
              <StyledOptions>
                <FeedIcon />
                <Link to='/news'>News</Link>
              </StyledOptions>
              <StyledOptions>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </StyledOptions>
              <StyledOptions>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </StyledOptions>
              <StyledOptions>
                <LocationOnIcon />
                <Link to='/maps'>Maps</Link>
              </StyledOptions>
              <StyledOptions>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledOptions>
            <Tooltip title='Settings'>
              <IconButton>
                <SettingsIcon sx={{ fontSize: "1.5rem", color: appsIconColor }}/>
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Google apps'>
              <IconButton>
                <AppsIcon 
                 data-testid="app-icon"
                 sx={{ fontSize: "1.5rem", color: appsIconColor }} />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Google Account'>
              <Avatar
                sx={{
                  
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8b0000",
                  color: "white",
                  cursor: "pointer",
                marginRight: "8px",
                }}
              >
                SG
              </Avatar>
            </Tooltip>
          </StyledOptions>
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </StyledHeaderRight>
      </StyledSearchHeader>
      <SearchResults data={data} toggleTheme={toggleTheme} />
    </StyledSearchPageHeaderContainer>
  );
};

export default SearchPage;
