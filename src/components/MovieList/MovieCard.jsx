import React from "react";
import "./MovieCard.css";
import star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <>
      <a href="" className="movie_card">
        <img
          src="https://imgs.search.brave.com/o7vlqfAccj45RZ1UXor4R6YLJRj-3-2USZAoaM_3v2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4LzUw/L2YxLzU4NTBmMTQz/ZWViNzVlNTFlMDA5/MTZmMTI2YjJiYmYy/LmpwZw"
          alt="Movie Poster"
          className="movie_poster"
        />
        <div className="movie_details">
          <h3 className="movie_details_heading">Movie Name</h3>
          <div className="align_center movie_date_rate">
            <p>
              8.0 <img src={star} alt="Rating Icon" className="card_emoji" />
            </p>
          </div>
          <p className="movie_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, labore.
          </p>
        </div>
      </a>
    </>
  );
};

export default MovieCard;
