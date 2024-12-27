import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full lg:w-3/5 max-w-4xl flex flex-col lg:flex-row gap-8">
        <form className="border border-gray-200 p-10 rounded-lg shadow-md bg-white flex-grow">
          <div className="text-center mb-6">
            <Typography variant="h2" className="font-bold mb-2">
              Join Our Platform
            </Typography>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="text-lg font-normal"
            >
              Create an account to easily upload your ID
            </Typography>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-user"></i> First Name
              </Typography>
              <Input
                size="lg"
                placeholder="John"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-user"></i> Last Name
              </Typography>
              <Input
                size="lg"
                placeholder="Doe"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i> Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                type="email"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-phone"></i> Phone Number
              </Typography>
              <Input
                size="lg"
                placeholder="+1 234 567 890"
                type="tel"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-lock"></i> Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mb-1 flex items-center gap-2"
              >
                <i className="fas fa-lock"></i> Confirm Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
          </div>
          <Button
            className="mt-6 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-200"
            fullWidth
          >
            Register Now
          </Button>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?{" "}
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign In
            </Link>
          </Typography>
        </form>
        <div className="w-full lg:w-2/5">
          <img
            src="/img/id2.jpeg"
            className="h-80 w-full object-cover rounded-3xl"
            alt="ID Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
