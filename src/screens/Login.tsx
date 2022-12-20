import React from "react";
// import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface Prop {
  onLogin: () => void;
}

export const Login = (props: Prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));

    // navigate("/Home", { replace: true });
  });

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            {...register("firstname", { required: true, maxLength: 10 })}
            id="firstname"
            name="firstname"
            type="text"
          />
          {errors.firstname && <div className="error">Enter your name</div>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            {...register("lastname", { required: true, maxLength: 10 })}
            id="lastname"
            name="lastname"
            type="text"
          />
          {errors.lastname && <div className="error">Enter your last name</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
          {errors.password && <p>Please check the Password</p>}
        </div>
        {/* onClick={props.onLogin} */}
        <button type="submit">Save</button>
      </form>
    </main>
  );
};
