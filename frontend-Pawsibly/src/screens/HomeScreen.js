import React, { useState, useEffect, useContext } from "react";
import AllSitters from "../components/AllSitters";
import {  Parallax, } from "react-materialize";
import { Row, Col } from 'react-bootstrap'
import './css/HomeScreen.css'
import { Link } from 'react-router-dom'
import SitterContext from "../context/sitter/SitterContext";
import { getSitters } from "../actions/SitterAction";
import Spinner from "../components/shared/Spinner";

const HomeScreen = () => {
  const { sitters, loading, dispatch } = useContext(SitterContext)
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getAllSitters = async () => {
      const sittersData = await getSitters()
      dispatch({ type: 'GET_SITTERS', payload: sittersData })
    }
    getAllSitters()
  }, [dispatch])

  // const [searchResults, setSearchResults] = useState([]);
  const sliceSitters = sitters.slice(-3)

  if (loading) {
    return <Spinner/>
  }

  return (
    <>
    <div className="section white">
      <div className='searchbar'>
        <h4 className="header" >
          Find local pet sitters near you
        </h4>

        <input type="text" id="ip2" placeholder="Search by zipcode or city" value={search} onChange={(e) => setSearch(e.target.value)} required />

        <Link to={`/searchpage/${search}`}>
          <button className="btn-floating btn-large waves-effect waves-light red accent-2"><i className="material-icons">send</i></button>
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
    <div className="cat">
      <Parallax
        image={<img alt="cat" src="/static/images/cat.png" />}
        options={{
          responsiveThreshold: 0
        }}
      />
      <div className="section white">
        <div className="searchbar" >
          <h2 className="header">
            Search for a nearby sitter
          </h2>
          <p className="grey-text text-darken-3 lighten-3">
            With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
          </p>
          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col s4">
              {/* Promo Content 1 goes here */}
              <i className="large material-icons">search</i>
              <h3>1. Find a sitter near you</h3>
            </div>
            <div className="col s4">
              {/* Promo Content 2 goes here */}
              <i className="large material-icons">schedule</i>
              <h3>2. Schedule a booking</h3>
            </div>
            <div className="col s4">
              {/* Promo Content 3 goes here  */}
              <i className="large material-icons">comment</i>
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