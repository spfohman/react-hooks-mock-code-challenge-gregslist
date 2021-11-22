import React, {useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then(data=>setListings(data));
  }, []);

  function handleRemoveListing(id){
    const newListings = listings.filter((listing)=>listing.id !== id);
    setListings(newListings);
  }
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} removeListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
