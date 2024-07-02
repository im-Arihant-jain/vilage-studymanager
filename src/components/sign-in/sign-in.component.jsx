import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import withNavigation from "../../withNavigation";
import axios from "axios";
import { message } from "antd";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      role: "Fellow", // default role
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, role } = this.state;
    const val = { email, password };

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/login", val);
      
      if (response.status === 200) {
        // Navigate to another page or show a success message
        console.log("User logged in successfully", response.data);
        message.success("Logged in successfully!");

        // Store the user ID in local storage
        localStorage.setItem("userId", JSON.stringify(response.data.user._id));

        // Navigate to the appropriate dashboard
        if (role === "Fellow") {
          this.props.navigate("/fellow-dashboard");
        } else if (role === "Fellow Manager") {
          this.props.navigate("/add-fellow");
        }
      }
    } catch (error) {
      console.error("Error logging in", error);
      // Handle error, e.g., show an error message
      message.error("Login failed. Please check your credentials and try again.");
    }

    this.setState({ email: "", password: "", role: "Fellow" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          
          <div className="dropdown">
            <label htmlFor="role" className="m-1 btn">Role</label>
            <select
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleRoleChange}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              <option value="Fellow">Fellow</option>
              <option value="Fellow Manager">Fellow Manager</option>
            </select>
          </div>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withNavigation(SignIn);
