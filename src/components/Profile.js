import React from 'react'

const Profile = () => {
  return (
        <div>
            <center>
                <a href='/' className='btn btn-dark' role='button'>Home</a>

        <div className="card w-30" style={{"width": "20rem"}}>
     <img src="https://avatars.dicebear.com/v2/avataaars/wisetr.svg" className="card-img-top" alt="image"/>
    <div className="card-body ">
    
<ul classname="list-unstyled">
  <li><h3>Sam Deeven</h3></li>
  <li><h5 className="card-text"><i className="fa-solid fa-envelope"></i> sam@gmail.com</h5></li>
  <li><h5 className="card-text"><i className="fa-solid fa-phone-flip"></i> 9876543210</h5></li>
  <li><h5 className="card-text"><i className="fa-solid fa-globe"></i> www.google.com</h5></li>
 
  <li><h5 className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Address: </h5>
    <ul>
      <li>Street: </li>
      <li>Suitee: </li>
      <li>City: </li>
      <li>Zipcode: </li>
      <ul>
      <li>Latitude: </li>
      <li>Longitude: </li>
      </ul>
    </ul>
  </li>

  <li><h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>Company: </h5></li>
  <ul>
      <li>Name: </li>
      <li>Catch Phrace: </li>
      <li>BS: </li>

  </ul>
</ul>
  

  </div>
</div>
</center>

    </div>      
  )
}

export default Profile
