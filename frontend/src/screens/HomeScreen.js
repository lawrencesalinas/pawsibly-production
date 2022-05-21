import React, { useState, useEffect, useContext } from "react";
import AllSitters from "../components/AllSitters";
import { Parallax } from "react-materialize";
import { Row, Col } from "react-bootstrap";
import "./css/HomeScreen.css";
import { useNavigate } from "react-router-dom";
import SitterContext from "../context/sitter/SitterContext";
import { getSitters } from "../context/sitter/SitterAction";
import Spinner from "../components/shared/Spinner";

const HomeScreen = () => {
  const { sitters, loading, dispatch } = useContext(SitterContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getAllSitters = async () => {
      const sittersData = await getSitters();
      dispatch({ type: "GET_SITTERS", payload: sittersData });
    };
    getAllSitters();
  }, [dispatch]);

  const navigate = useNavigate();

  // const [searchResults, setSearchResults] = useState([]);
  const sliceSitters = sitters.slice(-3);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchpage/${search}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="Homescreen">
      <div className="section white">
        <div className="searchbar" data-aos="fade-up" data-aos-delay="600">
          <h4 className="header">Find local pet sitters near you</h4>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="ip2"
              placeholder="Search by zipcode or city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn-floating btn-large waves-effect waves-light red accent-2"
            >
              <i className="material-icons">send</i>
            </button>
          </form>

          {/* used map to iterate info sitter array imported from sitters */}
          <h4 className="explore">Explore </h4>
          <div className="sitters">
            <Row style={{ justifyContent: "center" }}>
              {sliceSitters.map((sitter) => {
                return (
                  <Col key={sitter.id} sm={12} md={6} lg={4} xl={3}>
                    {/* pass sitter array to allsiters component */}
                    <AllSitters sitter={sitter} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <div className="cat" data-aos="zoom-in-right" data-aos-delay="600">
        <Parallax
          image={
            <img alt="cat" src="/static/images/cat.png" className="animal" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
        <div className="section white">
          <div className="searchbar">
            <h2 className="header" data-aos="fade-up">
              Search for a nearby sitter
            </h2>
            <p
              className="grey-text text-darken-3 lighten-3"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              With Pawsibly, your pet stays in a sitter's home, whether you're
              traveling for a few days or just out for the day. Here's how it
              works.
            </p>
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col s4">
                {/* Promo Content 1 goes here */}
                <i className="large material-icons" data-aos="fade-in">
                  search
                </i>
                <h3>1. Find a sitter near you</h3>
              </div>
              <div className="col s4">
                {/* Promo Content 2 goes here */}
                <i
                  className="large material-icons"
                  data-aos="fade-in"
                  data-aos-delay="600"
                >
                  schedule
                </i>
                <h3>2. Schedule a booking</h3>
              </div>
              <div className="col s4">
                {/* Promo Content 3 goes here  */}
                <i
                  className="large material-icons"
                  data-aos="fade-in"
                  data-aos-delay="900"
                >
                  comment
                </i>
                <h3>3. Leave a review</h3>
              </div>
            </div>
          </div>
        </div>
        <Parallax
          data-aos="zoom-in-left"
          data-aos-delay="400"
          image={<img alt="" src="/static/images/dog.png" />}
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>
      {/* About Section */}
      <div className="about-section">
        <div className="about-heading">
          <h3>Meet the Team</h3>
        </div>
        <div className="about-text">
          <p>
            We are three software developers who wanted to create an easy and
            <br />
            reliable source for pet owners to find a caretaker when they're busy
            or traveling.
          </p>
        </div>
      </div>
      {/* Team Section */}
      <section>
        <div className="team-container">
          <div className="team-item" data-aos="fade-right">
            <img src="/static/images/kel.jpeg" alt="" className="team-img" />
            <div className="devinfo">
              <h5 className="devname">Kelly Larrea</h5>
              <p className="title">Web developer/Software Engineer</p>
              <div className="socialmedia">
                <button className="github">
                  <i className="fab fa-github"></i>
                </button>
                <button className="google">
                  <i className="fab fa-google"></i>
                </button>
                <button className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="team-item" data-aos="fade-up">
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02HC7LNYLA-8ed5a6daf910-72"
              alt=""
              className="team-img"
            />
            <div className="devinfo">
              <h5 className="devname">Lawrence Salinas</h5>
              <p className="title">Web Developer/Software Engineer</p>
              <div className="socialmedia">
                <button className="github">
                  <i className="fab fa-github"></i>
                </button>
                <button className="google">
                  <i className="fab fa-google"></i>
                </button>
                <button className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="team-item" data-aos="fade-left">
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02HZGJG01W-5987ce56defa-512"
              alt=""
              className="team-img"
            />
            <div className="devinfo">
              <h5 className="devname">Galyver Asi</h5>
              <p className="title">Technical Consultant/Software Engineer</p>
              <div className="socialmedia">
                <button className="github">
                  <i className="fab fa-github"></i>
                </button>
                <button className="google">
                  <i className="fab fa-google"></i>
                </button>
                <button className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
