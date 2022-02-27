import React, { useState, useEffect } from "react";
import AllSitters from "../components/AllSitters";
import { Icon, Parallax, } from "react-materialize";
import {Form, Button} from 'react-bootstrap'
import './css/HomeScreen.css'
import {Link} from 'react-router-dom'

const HomeScreen = ({sitters}) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
console.log(sitters);
  const searchItems = (e) => {
    e.preventDefault()

    let filteredSitters = sitters.filter((sitter) => {
      return (
        sitter.city.toLowerCase().includes(search.toLowerCase()) ||
        sitter.zipcode.toString().includes(search.toString())
      );
    });
    setSearchResults(filteredSitters);
  };
console.log('filtered',searchResults);
  return (
    <>
          <div className="section white">
            <div className="row container" class="center-align">
              <h4 className="header" >
                find local pet sitters near you
              </h4>
              {/* <form onSubmit={searchItems}>
              <input type="text" id="ip2" placeholder="Enter zipcode or city" value={search}  onChange={(e)=> setSearch(e.target.value)}  required />
              <button  type="submit" class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
              </form> */}
                 <input type="text" id="ip2" placeholder="Enter zipcode or city" value={search}  onChange={(e)=> setSearch(e.target.value)}  required />
          
           <Link to={`/searchpage/${search}`}>
           <button class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
                </Link>




              
              {/* <form onSubmit={searchItems}>
						<div className="input-field">
							<input id="zipcode" placeholder="Enter zipcode or city" value={search} type="text" onChange={(e)=> setSearch(e.target.value)}  required />
							<button type="submit" class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
							<label>
								<Icon>search</Icon>
							</label>
						</div>
					</form> */}
             
              <AllSitters sitters={searchResults} />
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
                  search for a nearby sitter
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                  With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
                </p>
                <div class="row" style={{ marginTop: '50px' }}>
                  <div class="col s4">
                    {/* Promo Content 1 goes here */}
                    <i class="large material-icons">search</i>
                    <h3>1. find a sitter near you</h3>
                  </div>
                  <div class="col s4">
                    {/* Promo Content 2 goes here */}
                    <i class="large material-icons">schedule</i>
                    <h3>2. schedule a booking</h3>
                  </div>
                  <div class="col s4">
                    {/* Promo Content 3 goes here  */}
                    <i class="large material-icons">comment</i>
                    <h3>3. leave a review</h3>
    
    
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