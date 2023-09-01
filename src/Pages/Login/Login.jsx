import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row text-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in to Doc House!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username or Email Address</span>
                </label>
                <input type="text" placeholder="UserName email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-red-700">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">Create Account</button>
              </div>
            </form>
            <p className="p-2 text-xl"><small className="text-sky-700">Please register at first. <Link className="underline text-orange-500" to="/signup"> Go to SIGN UP</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default Login;