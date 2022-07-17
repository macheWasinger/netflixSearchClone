import React, { useState } from "react";
import NavBar from "./NavBar";
import NavBarMOBILE from "./NavBarMOBILE";

import imageMiyagi from "../img/img-Miyagi.png";

const Search = () => {
  const [titleMovie, setTitleMovie] = useState("");
  const [arrayMovies, setArrayMovies] = useState([]);
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [disableCross, setDisableCross] = useState(false);

  const ApiMovies = `https://imdb-api.com/API/Search/k_6z8a9xe2/${titleMovie}`;

  const getDataApi = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(ApiMovies);
      const data = await res.json();

      const arrayData = data.results.map((item) => ({
        id: item.id,
        imageMovie: item.image,
        title: item.title,
        descriptionMovie: item.description,
      }));

      setArrayMovies(arrayData);

      console.log(`ARRAY MOVIES: ${arrayMovies}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerButtonCross = () => {
    setTitleMovie("");
  };

  const handlerButtonSearch = (e) => {
    e.preventDefault();
    setActiveInputSearch(!false);
    setDisableCross(false);

    if (titleMovie.length > 0) {
      console.log("Consumiste la API");
      getDataApi(e);
    }
  };

  const handlerHideInputContainer = () => {
    setActiveInputSearch(false);
    setDisableCross(true);
    setTitleMovie("");
  };

  return (
    <div className="main-container_search">
      <section className="header-container d-flex justify-content-around">
        <NavBar />

        <section className="NavBarMOBILE-container" style={{ display: "none" }}>
          <NavBarMOBILE />
        </section>

        <div
          className={`input-container ${
            activeInputSearch ? "show__input-container" : ""
          }`}
        >
          <form
            className={`form-container d-flex align-items-center ${
              activeInputSearch ? "show-input" : ""
            }`}
          >
            <button
              type="submit"
              className={`btn btn-sm rounded-0 icon-search ${
                activeInputSearch ? "move-iconButtonSearch" : ""
              }`}
              onClick={(e) => handlerButtonSearch(e)}
            >
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
            <input
              type="text"
              className="form-control rounded-0 text-input"
              onChange={(e) => setTitleMovie(e.target.value)}
              value={titleMovie}
            />
            {titleMovie.length > 0 ? (
              <button
                className={`btn btn-sm rounded-0 style-cross ${
                  disableCross ? "hide-cross" : "show-cross"
                }`}
                onClick={() => handlerButtonCross()}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            ) : null}
          </form>
        </div>
        <div
          className="notification-miyagi-downArrow_container"
          style={{
            width: "6vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <article className="notification-container">
            <div className="cantidad-container">7</div>
            <div className="bell-container">
              <i className="fa-solid fa-bell"></i>
            </div>
          </article>
          <article className="img-miyagi_container">
            <img src={imageMiyagi} alt="" />
          </article>
          <article className="downArrow-container">
            <i className="fa-solid fa-sort-down"></i>
          </article>
        </div>
      </section>
      <section
        className="movies-container"
        onClick={() => handlerHideInputContainer()}
      >
        {arrayMovies.length > 0 ? (
          <article className="subtitles-container d-flex">
            <p className="explore-titles_container">
              Explore titles related to:
            </p>

            <ul className="subtitles-movies">
              {arrayMovies.map((item) => (
                <li className="subtitle">
                  {item.title} <span style={{ color: "#787878" }}>|</span>{" "}
                </li>
              ))}
            </ul>
          </article>
        ) : null}
        <ul className={` ${arrayMovies.length < 6 ? "center-images" : ""}`}>
          {arrayMovies.map((item) => (
            <li key={item.id}>
              <div className="container-data-movie">
                <div className="title-description_movie">
                  <h3 className="titulo_movie">{item.title}</h3>
                  <p className="descripcion_movie">{item.descriptionMovie}</p>
                </div>
                <article className="container-imagen-movie">
                  <img loading="lazy" src={item.imageMovie} alt="" />
                </article>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Search;
