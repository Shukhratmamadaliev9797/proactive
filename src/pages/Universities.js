import React from "react";
import data from "../data/data.js";
import { Link } from "react-router-dom";

export default function Universities() {
  return (
    <div className="universities">
      <div className="universities__container">
        <div className="universities__title">
          <h1>Top Universities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam
            rerum dolorum veritatis, tenetur, placeat quod aliquid sapiente
            veniam ab nihil ullam, quibusdam excepturi illum eaque quae
            asperiores possimus nobis.
          </p>
        </div>
        <div className="universities__categories">
          <button>All</button>
          <button>UK</button>
          <button>USA</button>
          <button>Australia</button>
          <button>Canada</button>
        </div>
        <div className="universities__lists">
          {data.universities.map((university) => {
            return (
              <div className="universities__university">
                <div className="universities__university-img">
                  <img src={university.image} alt="" />
                </div>
                <div className="universities__university-info">
                  <h5>{university.name}</h5>
                  <span>{university.location}</span>
                  <h6>Rank: {university.rank} (QS World University Ranking)</h6>
                  <p>{university.about}</p>
                  <div className="universities__university-social">
                    <ul>
                      <li>
                        <i class="fab fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                      <li>
                        <i class="fab fa-linkedin-in"></i>
                      </li>
                    </ul>
                    <Link>Website</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
