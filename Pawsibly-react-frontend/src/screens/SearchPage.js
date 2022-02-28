import React from 'react'
import './css/SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from '../components/SearchResult'
import {useParams} from 'react-router-dom'

function SearchPage({sitters}) {
    console.log(sitters);
    let {url} = useParams()
   
    let filteredSitters = sitters.filter((sitter) => {
        return (
          sitter.city.toLowerCase().includes(url.toLowerCase()) ||
          sitter.zipcode.toString().includes(url.toString())
        );
      });
    let numSitters = filteredSitters.length
      console.log(filteredSitters);
 
    return (
        <div className='SearchPage'>
           <div className='searchPage_info'>
           <p>{numSitters} results</p>
           <h1>Sitters nearby</h1>
           <Button variant="outlined">Host A Pet</Button>
                {/* <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button> */}
               </div>
        {filteredSitters.map(sitter => {
            return (
                <SearchResult
                id = {sitter.id}
                img={sitter.image}
                location={sitter.city}
                title={sitter.title}
                description={sitter.description}
                review={sitter.rating}
                price={sitter.price}
                total={sitter.price}
                numReviews={sitter.numReviews}
                zipcode = {sitter.zipcode}
            />
            
            
            );
        })}
        </div>
    )
}

export default SearchPage
