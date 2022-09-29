import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({ searchText: "" });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type={"text"}
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? "" : "none" }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? "" : "none" }}>
            No hero with <b>{q}</b>
          </div>

          {heroes.map((heroe) => (
            <HeroCard key={heroe.id} heroe={heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
