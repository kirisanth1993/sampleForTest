To migrate the AngularJS code to React, we need to create functional components in React. Here is a basic example of how you can convert the AngularJS code to React. 

Please note that this is a simplified example and might not cover all the functionalities of your AngularJS code. You might need to adjust it according to your needs.

```jsx
import React, { useState } from 'react';

// User component
const User = ({ user, logout }) => (
  <div>
    <h2>{user.username}</h2>
    <button onClick={logout}>Logout</button>
  </div>
);

// Settings component
const Settings = ({ user, updateUser, logout }) => {
  const [formData, setFormData] = useState({
    email: user.email,
    bio: user.bio,
    image: user.image,
    username: user.username
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" value={formData.email} onChange={handleChange} />
        <input name="bio" value={formData.bio} onChange={handleChange} />
        <input name="image" value={formData.image} onChange={handleChange} />
        <input name="username" value={formData.username} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// App component
const App = () =>