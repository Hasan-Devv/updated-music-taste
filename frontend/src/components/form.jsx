import React, { useState, useEffect } from 'react';
import './form-styles.css'
import  {parsePath, useNavigate}  from 'react-router-dom'
import PopularityDisplay from './popularityDisplay';
import DataDisplay from './dataDisplay';


const UserDataForm = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    favGenre: '',
    favAlbum: '',
    favArtist: '',
  });

  // const [Popularity, setPopularity] = useState("hey")
  let Popularity;
  let userDataFromServer  

  useEffect(() => {
    console.log("Updated Popularity:", Popularity); // This will log the updated value
  }, [Popularity]);
  
  // let Popularity ;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    })); 
  };

  const popularityExists = Popularity? true: false
  console.log(popularityExists)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json()
      // const Popularity = data.popularity
      Popularity = data.popularity

      console.log(data.popularity)
   
      console.log(Popularity)

      userDataFromServer = data.userData
      
      

      if (response.ok) {
        // Handle successful response (e.g., show success message)
        console.log('User data submitted successfully.', Popularity);
        navigate('/data-display');
        
      } else {
        // Handle error response (e.g., show error message)
        console.error('Failed to submit user data.');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <>
    <div className='outer-page-container'>
      <div className="page-container">
        <div className="modal-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label">Favorite Genre:</label>
              <input
                type="text"
                name="favGenre"
                value={userData.favGenre}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label className="label">Favorite Album:</label>
              <input
                type="text"
                name="favAlbum"
                value={userData.favAlbum}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label className="label">Favorite Artist:</label>
              <input
                type="text"
                name="favArtist"
                value={userData.favArtist}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className='outer-page-container'>

    <DataDisplay prodata={userDataFromServer}/>

    </div>
    </>
  );
};

export default UserDataForm;
