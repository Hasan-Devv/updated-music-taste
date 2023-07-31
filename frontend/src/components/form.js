import React, { useState } from 'react';
import './form-styles.css'
import  {useNavigate}  from 'react-router-dom'
import PopularityDisplay from './popularityDisplay';

const UserDataForm = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    favGenre: '',
    favAlbum: '',
    favArtist: '',
  });

  const [popularity, setPopularity] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    })); 
  };

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
      const popularity = data.popularity
      setPopularity(popularity)
      console.log(popularity)

      if (response.ok) {
        // Handle successful response (e.g., show success message)
        console.log('User data submitted successfully.');
        navigate('/popularity');
      } else {
        // Handle error response (e.g., show error message)
        console.error('Failed to submit user data.');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
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
      <PopularityDisplay popularity={popularity}/>
    </div>
  );
};

export default UserDataForm;
