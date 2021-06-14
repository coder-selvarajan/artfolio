import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import { categories } from "../data/constants";
import Chip from "@material-ui/core/Chip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
}));

const FilterBar = (props) => {
  const classes = useStyles();
  const { handleFilterClick, selectedFilter } = props;

  return (
    <Toolbar
      component='nav'
      variant='dense'
      className={classes.toolbarSecondary}>
      {categories.map((category) => (
        <Chip
          label={category.title.toUpperCase()}
          onClick={() => handleFilterClick(category.key)}
          color='primary'
          variant={`${selectedFilter === category.key ? "filled" : "outlined"}`}
          size={`${selectedFilter === category.key ? "medium" : "small"}`}
          icon={selectedFilter === category.key ? <CheckCircleIcon /> : null}
        />
      ))}
    </Toolbar>
  );
};

export default FilterBar;
