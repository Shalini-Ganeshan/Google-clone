import {
  SearchResultsContainer,
  SearchResultsWrapper,
  SearchResultsTitle,
} from "./SearchResults.Styled";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const SearchResults = ({ data = {}  }) => {
  const theme = useTheme();
  const formattedSearchTime = data?.searchInformation?.searchTime?.toFixed(2);
  const [appsIconColor, setAppsIconColor] = useState(
    theme.palette.mode === "light" ? "#fff" : "rgba(0, 0, 0, 0.87)"
  );
  const [titleColor, setTitleColor] = useState(
    theme.palette.mode === "light" ? "#800080" : "#C5B4E3"
  );
  useEffect(() => {
   
    setAppsIconColor(
      theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff"
    );
    setTitleColor(
      theme.palette.mode === "light" ? "#800080" : "#C5B4E3"
    );
  }, [theme.palette.mode]);

  return (
    <SearchResultsContainer>
      <Typography
        variant='p'
        component='p'
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "Google Sans,Roboto,arial,sans-serif",
          paddingTop: "8px",
          marginLeft:"240px",
          marginTop:"15px",
          fontSize: "0.875rem",
          color: appsIconColor,
        }}
      >
        About {data?.searchInformation?.formattedTotalResults} results{" "}
        ({data?.searchInformation?.formattedSearchTime}) seconds
      </Typography>
      {data?.items?.map((item) => (
        <SearchResultsWrapper key={item?.cacheId}>
          <div>
            <SearchResultsTitle href={item?.link}>
              <div style={{ display: 'flex'}}>
              {item?.pagemap?.cse_image?.length > 0 &&
                item?.pagemap?.cse_image[0]?.src && (
                  <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' />
                )}
              <Typography
                variant='p'
                component='p'
                sx={{
                  
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  textDecoration: "underline",
                  color: appsIconColor,
                }}
              >
                {item?.displayLink}
              </Typography>
              </div>
            </SearchResultsTitle>
            <SearchResultsTitle href={item?.link}>
              <Typography
                variant='h3'
                component='h3'
                sx={{
                  
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: titleColor,
                }}
              >
                {item?.title}
              </Typography>
            </SearchResultsTitle>
            <Typography
              variant='body1'
              component='body1'
              sx={{
                marginTop: "16px",
                fontSize: "0.875rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "500",
                color: appsIconColor,
              }}
            >
              {item?.snippet}
            </Typography>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon sx={{ fontSize: "0.875rem", color: "#bdc1c6" }} />
            </IconButton>
          </div>
        </SearchResultsWrapper>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults