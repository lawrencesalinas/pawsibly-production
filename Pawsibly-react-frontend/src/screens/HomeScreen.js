import React, { useState, useEffect, useContext } from "react";
import AllSitters from "../components/AllSitters";
import { Icon, Parallax, } from "react-materialize";
import { Form, Button, Row, Col } from 'react-bootstrap'
import './css/HomeScreen.css'
import { Link } from 'react-router-dom'
import SitterContext from "../context/sitter/SitterContext";
import { getSitters } from "../context/sitter/SitterAction";
import Spinner from "../components/shared/Spinner";

const HomeScreen = () => {
  const { sitters, loading, dispatch } = useContext(SitterContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getAllSitters = async () => {
      const sittersData = await getSitters()
      dispatch({ type: 'GET_SITTERS', payload: sittersData })
    }
    getAllSitters()
  }, [])

  const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const sliceSitters = sitters.slice(-3)

  if (loading) {
    return <Spinner/>
  }

  return (
    <>
      <div className="section white">
        <div className="row container" class="center-align">
          <h4 className="header" >
            Find local pet sitters near you
          </h4>

          <input type="text" id="ip2" placeholder="Search sitter by zipcode or city" value={search} onChange={(e) => setSearch(e.target.value)} required />

          <Link to={`/searchpage/${search}`}>
            <button class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
          </Link>

          {/* used map to iterate info sitter array imported from sitters */}
          <h4 className="explore">Explore </h4>
          <div className="sitters">
            <Row style={{ justifyContent: 'center' }}>
              {sliceSitters.map((sitter) => {
                return (
                  <Col key={sitter.id} sm={12} md={6} lg={4} xl={3}>
                    {/* pass sitter array to allsiters component */}
                    <AllSitters sitter={sitter} />
                  </Col>

                )
              })}
            </Row>
          </div>
        </div>
      </div>
      <div>
        <Parallax
          image={<img alt="cat" src="/static/images/cat.png" />}
          options={{
            responsiveThreshold: 0
          }}
        />
        <div className="section white">
          <div className="row container" class="center-align">
            <h2 className="header">
              Search for a nearby sitter
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
            </p>
            <div class="row" style={{ marginTop: '50px' }}>
              <div class="col s4">
                {/* Promo Content 1 goes here */}
                <i class="large material-icons">search</i>
                <h3>1. Find a sitter near you</h3>
              </div>
              <div class="col s4">
                {/* Promo Content 2 goes here */}
                <i class="large material-icons">schedule</i>
                <h3>2. Schedule a booking</h3>
              </div>
              <div class="col s4">
                {/* Promo Content 3 goes here  */}
                <i class="large material-icons">comment</i>
                <h3>3. Leave a review</h3>


              </div>

            </div>
          </div>
        </div>
        <Parallax
          image={<img alt="" src="/static/images/dog.png" />}
          options={{
            responsiveThreshold: 0
          }}
        />
      </div>


    </>


  )
}

export default HomeScreen