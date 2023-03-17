import React, { useState } from 'react';
import axios from '../../api/axios';
import './SearchPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const {searchId} = useParams()

  useEffect(()=> {
    axios.get(`/search?part=snippet&maxResults=10&type=video&q=${searchId}`)
      .then(response => {
        console.log(response.data.items);
      })
      .catch(error =>{
        console.error(error);
      });
  },[])
    



  
  return (
    <div>
  
    </div>
  );
  }
