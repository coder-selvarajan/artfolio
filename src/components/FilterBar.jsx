import { categories } from "../data/constants";
import Chip from "@material-ui/core/Chip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const FilterBar = (props) => {
  const notMobile = useMediaQuery("(min-width:600px)");
  const { handleFilterClick, selectedFilter } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // p: 1,
        // m: 1,
        bgcolor: "background.paper",
        // maxWidth: 300,
      }}>
      {categories.map((category, index) => (
        <Chip
          key={index}
          sx={{ m: notMobile ? 1 : 0.5 }}
          label={category.title.toUpperCase()}
          onClick={() => handleFilterClick(category.key)}
          color='primary'
          variant={`${selectedFilter === category.key ? "filled" : "outlined"}`}
          // size={`${selectedFilter === category.key ? "small" : "small"}`}
          size={`${notMobile ? "medium" : "small"}`}
          icon={selectedFilter === category.key ? <CheckCircleIcon /> : null}
        />
      ))}
    </Box>
  );
};

export default FilterBar;
