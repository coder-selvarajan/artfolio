import { categories } from "../data/constants";
import Chip from "@material-ui/core/Chip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Box from "@material-ui/core/Box";

const FilterBar = (props) => {
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
      {categories.map((category) => (
        <Chip
          sx={{ m: 0.25 }}
          label={category.title.toUpperCase()}
          onClick={() => handleFilterClick(category.key)}
          color='primary'
          variant={`${selectedFilter === category.key ? "filled" : "outlined"}`}
          size={`${selectedFilter === category.key ? "small" : "small"}`}
          icon={selectedFilter === category.key ? <CheckCircleIcon /> : null}
        />
      ))}
    </Box>
  );
};

export default FilterBar;
