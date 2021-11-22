import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  const eachListing = listings.map((listing)=>{
    return <ListingCard key={listing.id} listing={listing} removeListing={removeListing}/>
  })
  return (
    <main>
      <ul className="cards">
        {eachListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
