import { useEffect, useContext } from "react";
import SitterContext from "../context/sitter/SitterContext";
import { getSitters } from "../context/sitter/SitterAction";
import "./css/SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "../components/SearchResult";
import { useParams } from "react-router-dom";
import Spinner from "../components/shared/Spinner";

function SearchPage() {
  const { sitters, loading, dispatch } = useContext(SitterContext);

  const { url } = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getAllSitters = async () => {
      const sittersData = await getSitters();
      dispatch({ type: "GET_SITTERS", payload: sittersData });
    };
    getAllSitters();
  }, [dispatch, url]);

  let filteredSitters = sitters.filter((sitter) => {
    return (
      sitter.city.toLowerCase().includes(url.toLowerCase()) ||
      sitter.zipcode.toString().includes(url.toString())
    );
  });
  let numSitters = filteredSitters.length;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="SearchPage" data-aos="fade-right">
      <div className="searchPage_info">
        <h1>Sitters nearby</h1>
        <p>{numSitters} results</p>
        <Button variant="outlined">Host A Pet</Button>
      </div>
      {filteredSitters.map((sitter) => {
        return (
          <SearchResult
            id={sitter.id}
            img={sitter.image}
            location={sitter.city}
            title={sitter.title}
            description={sitter.description}
            review={sitter.rating}
            price={sitter.price}
            total={sitter.price}
            numReviews={sitter.numReviews}
            zipcode={sitter.zipcode}
          />
        );
      })}
    </div>
  );
}

export default SearchPage;
