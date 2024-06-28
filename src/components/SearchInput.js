import React, { useState } from "react";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./SearchInput.Styled";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


  const SearchInput = ({ showButtons = false }) => {
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?${searchTerm}`);
    };

  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <StyledSearchIcon aria-labelledby="search" data-testid="search-icon" />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-input"
        />
        <Tooltip title="Search by voice">
          <StyledMicIcon aria-label="voiceover" data-testid="mic-icon" />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer showButtons={showButtons}>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            color: theme.palette.mode === "light" ? "#000" : "#fff", // Set text color based on theme
            backgroundColor: theme.palette.mode === "light" ? "#fff" : "#202124", // Set background color based on theme
          }}
        >
          Google Search
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.mode === "light" ? "#fff" : "#000", // Set text color based on theme
            borderColor: theme.palette.mode === "light" ? "#fff" : "#202124", // Set border color based on theme
          }}
        >
          I'm Feeling Lucky
        </Button>
      </StyledButtonContainer>
    </form>
  );
};

export default SearchInput;

