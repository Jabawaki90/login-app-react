import React from "react";

function login() {
  return (
    <form className="login-form" onSubmit={() => console.log("yo")}>
      <div className="input-container">
        <label htmlFor="username">Username </label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email </label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Pasword </label>
        <input type="text" id="password" name="password" />
      </div>
    </form>
  );
}

export default login;
