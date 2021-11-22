import React, {useState} from "react";

function ListingCard({listing: {id, image, description, location}, removeListing}) {
  const [liked, setLiked] = useState(false)
  function onClick(){
    setLiked(!liked)
  }
  function handleDelete(){
  
    fetch(`http://localhost:6001/${id}`, {
      method: "DELETE", 
      
    })
    removeListing(id)
  
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick = {()=>onClick()} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>onClick()} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
