import { useState } from "react";
import Container from "@material-ui/core/Container";
import { picsDB } from "../data/constants";
import ArtworkList from "../components/ArtworkList";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("featured");
  const [filteredPics, setFilteredPics] = useState(() => {
    return picsDB.filter((item) => item.category.indexOf(selectedFilter) > -1);
  });

  const handleFilterClick = (cat) => {
    setSelectedFilter(cat);
    if (cat.toLowerCase().startsWith("all")) {
      setFilteredPics(picsDB);
      return;
    }
    setFilteredPics(
      picsDB.filter((item) => item.category.indexOf(cat.toLowerCase()) > -1)
    );
  };

  return (
    <>
      <Container maxWidth='lg' className='container'>
        <Header />
        <br />
        <FilterBar
          selectedFilter={selectedFilter}
          handleFilterClick={handleFilterClick}
        />

        <ArtworkList filteredPics={filteredPics} />
      </Container>
    </>
  );
}

export default App;
