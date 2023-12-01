import React, { useEffect, useState } from "react";
import data from "../data/data.js";
import { Link } from "react-router-dom";

export default function Universities() {
  const [universities, setUniversities] = useState(data.universities);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const filteredUni = () => {
      const filteredUniversities = universities.filter(
        (university) => university.loc === category
      );
      setUniversities(filteredUniversities);
    };
    console.log(universities);
    if (category) {
      filteredUni();
    } else {
      setUniversities(data.universities);
    }
  }, [category]);
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
          <button onClick={() => setCategory("")}>All</button>
          <button onClick={() => setCategory("UK")}>UK</button>
          <button onClick={() => setCategory("US")}>USA</button>
          <button onClick={() => setCategory("Australia")}>Australia</button>
          <button onClick={() => setCategory("Canada")}>Canada</button>
        </div>
        <div className="universities__lists">
          {universities.map((university) => {
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
