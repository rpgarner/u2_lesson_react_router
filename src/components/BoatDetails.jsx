import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BoatDetails = (props) => {

  const [selectedBoat, setBoat] = useState('')

  let {id} = useParams()

  useEffect(() => {
    let selectedBoat = props.boats.find(
      (boat) => boat.id === parseInt(id)
    )
    setBoat(selectedBoat)
  }, [props.boat, id])

  return selectedBoat ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedBoat.img} alt={selectedBoat.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{selectedBoat.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Price: ${selectedBoat.price}</h3>
          <h3>Boat ID: {selectedBoat.id}</h3>
        </div>
        <p>{selectedBoat.description}</p>
        <Link to='/listings'><button>Back</button></Link>
      </div>
    </div>
  ) : null;
}

export default BoatDetails
