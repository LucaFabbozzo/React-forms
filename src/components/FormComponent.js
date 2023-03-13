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
      bio: data.bio.value
    }
    setUser(user);
  }

  return (
    <div>
      <div className="container">
        <h3>React Form</h3>

        {user.bio && user.bio.length >= 1 && (
          <div className="info_user label">
            <p>
              {user.name} {user.surname} es un {user.gender} y su biografie
              esta:{" "}
            </p>
            <p>{user.bio}</p>
          </div>
        )}

        <form onSubmit={getDataFromForms}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Surname" name="surname" />
          <select name="gender">
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <textarea placeholder="Bio" name="bio"></textarea>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
