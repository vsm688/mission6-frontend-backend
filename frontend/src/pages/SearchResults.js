import React, { useState,useEffect } from 'react'
import NavBar from '../components/navbar/NavBar'
import SortOptions from '../components/sortoptions/SortOptions';
const SearchResults = () => {

  return (
    <>
      <NavBar displayed={"no"}></NavBar>
      <SortOptions></SortOptions>
    </>
  )
}

export default SearchResults