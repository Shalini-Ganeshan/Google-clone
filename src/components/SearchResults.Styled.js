import { styled } from "@mui/system";


const SearchResultsContainer = styled("div")(({ theme }) => ({
  maxWidth: "100vw",
  marginLeft: "0px",
  marginBottom: "100px",
  top: "148px",
  position: "fixed",
  bottom: "0",
  width: "100vw",
  height: "100vh", 
  overflowY: "scroll",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: theme.palette.background.default, // Use theme's background default color
  color: theme.palette.text.primary, // Use theme's text primary color
}));

const SearchResultsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "48px 240px",
  width:"100vw",
  color: theme.palette.text.primary, 
  backgroundColor: theme.palette.background.default,
}));

const SearchResultsTitle = styled("a")(({ theme }) => ({
  textDecoration: "none",
  img: {
    objectFit: "contain",
    height: "24px",
    width: "24px",
    marginRight: "10px",
  },
  "&:hover": {
    textDecoration: "underline",
    color: "#CBC3E3", 
  },
}));

export { SearchResultsContainer, SearchResultsWrapper, SearchResultsTitle };
