import React, { useState } from 'react'

export const FormComponent = () => {

  const [user, setUser] = useState({});

  const getDataFromForms = e => {
    e.preventDefault();

    let data = e.target;

    let user = {
      name: data.name.value,
      surname: data.surname.value,
      gender: data.gender.value,
      bio: data.bio.value,
      send: data.send.value
    }
    setUser(user);
  }

  const changeData = e => {
    let input_name = e.target.name;
    let user_for_change = user;

    //user_for_change[input_name] = e.target.value;

    setUser(prev_state => ({
        ...prev_state,
      [input_name]: e.target.value
     })
    );
  
    console.log(user)
  }
  
  return (
    <div>
      <div className="container">
        <h3>React Form</h3>

        {user.send && (
          <div className="info_user label">
            <p>
              {user.name} {user.surname} es un {user.gender} y su biografie
              esta:{" "}
            </p>
            <p>{user.bio}</p>
          </div>
        )}

        <form onSubmit={getDataFromForms}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={changeData}
          />
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            onChange={changeData}
          />
          <select name="gender" onChange={changeData}>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <textarea
            placeholder="Bio"
            name="bio"
            onChange={changeData}
          ></textarea>

          <input type="submit" value="Send" name="send" />
        </form>
      </div>
    </div>
  );
}
