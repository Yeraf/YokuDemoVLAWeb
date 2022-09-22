import React, { useEffect, useState } from "react";
import "../CSS/Team.css";
import "../CSS/swiper-bundle.min.css";
import User1 from "../img/ImagesTeam/user1.jpg";
import User2 from "../img/ImagesTeam/user2.jpg";
import User3 from "../img/ImagesTeam/user3.jpeg";
import User4 from "../img/ImagesTeam/user4.jpg";
import { Flip } from "react-reveal";
import ApiRandom from '../components/ApiRandom';

const RandomUser = () => {

    const [user, setUser] = useState (null);

  useEffect(() => {
    fetch("https://api.randomuser.me/")
    .then(res => res.json())
    .then((data) => {
        console.log(data)

        const userData = {
            name: data.results[0].name.first,
            email: data.results[0].email,
            picture: data.results[0].picture.medium,
            title: data.results[0].name.title
        };

        setUser(userData)
    })
  }, []);

  return (
    <div>
      {user ? ( 
      <div className="contenedor-team-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">
                      <Flip>
                      <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area">
                                <img src={user.picture} alt=""></img>
                              </div>
                              <div className="img-text">
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                              </div>
                            </div>
                      </div>
                    </Flip>     
                      <Flip>
                        <div className="col-md-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src={User2} alt=""></img>
                            </div>
                            <div className="img-text">
                              <h2>{user.title}</h2>
                              <p>{user.email}</p>
                            </div>
                          </div>
                        </div>
                      </Flip>
                      <Flip>
                        <div className="col-md-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src={user.picture} alt=""></img>
                            </div>
                            <div className="img-text">
                              <h2>Person Three</h2>
                              <p>person@onegmail.com</p>
                            </div>
                          </div>
                        </div>
                      </Flip>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area">
                            <img src={user.picture} alt=""></img>
                          </div>
                          <div className="img-text">
                            <h2>Person Four</h2>
                            <p>person@onegmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area">
                            <img src={user.picture} alt=""></img>
                          </div>
                          <div className="img-text">
                            <h2>Person Five</h2>
                            <p>person@onegmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area">
                            <img src={user.picture} alt=""></img>
                          </div>
                          <div className="img-text">
                            <h2>Person Six</h2>
                            <p>person@onegmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ) : null}
    </div>
  );
};


export default RandomUser;