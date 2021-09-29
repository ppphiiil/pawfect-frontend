import React, { useEffect, useState, useContext } from "react";
import PetCard from "../components/PetCard";
import MyContext from "../context/MyContext";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "../style/pages/_myAds.scss";

const MyAds = () => {
  const [adsList, setAdsList] = useState([])
  const { userId } = useContext(MyContext)
  const { pet,setPet } = useContext(MyContext)


     const deleteAd = () => {
      fetch(process.env.REACT_APP_BACKEND_URL + `pets/delete`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ petId: pet._id, userId: userId  })
      })
        .then(data => data.json())
        .then(response => {
          setAdsList(response.data)
        })
        .catch(err => console.error('error while deleting ad =>', err))
    }


  useEffect(() => {
		const fetchAds = () => {
			// process.env.REACT_APP_BACKEND_URL
			// http://localhost:4000/
			fetch(process.env.REACT_APP_BACKEND_URL + `pets/userads`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId: userId }),
			})
				.then(data => data.json())
				.then(response => {
					setAdsList(response.data);
				})
				.catch(err => console.error("error while fetching user-ads =>", err));
		};

		fetchAds();
	}, []);

	return (
		<div className='app-container container'>
			<h2>Your Ads</h2>
			<div className='gallery__grid-container'>
				{adsList &&
					adsList.length!==0? adsList.map((pet, index) => (
						<div className='pet-ad-card'>
							<PetCard pet={pet} key={index} />
							<div className='ad-actions'>
								<Link to={`/edit-ad/${pet._id}`}>
									<Button
										variant='contained'
										color='primary'
										className='ad-btn-edit'
										onClick={setPet(pet)}>
										Edit
									</Button>
								</Link>
								<Button
									variant='outlined'
									color='secondary'
									className='ad-btn-delete'
									onClick={deleteAd}>
									Delete
								</Button>
							</div>
						</div>
					)):<div className="opacity50"><h2>No Ads here yet</h2><h3>When you find a pet you love, add it to your favorites list by tapping the favorite button 

</h3><Link to="/gallery"><p>Find your pet</p></Link></div>
					
					}
			</div>
		</div>
	);
};

export default MyAds


