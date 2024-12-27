import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Welcome Back!
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Access your account to upload your ID
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-4 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
          <Button className="mt-6" fullWidth>
            Sign In
          </Button>
          <div className="flex justify-between items-center mt-4">
            <Link
              to="/auth/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
            <Typography
              variant="paragraph"
              className="text-blue-gray-500 font-medium"
            >
              Don’t have an account?{" "}
              <Link to="/auth/sign-up" className="text-gray-900 ml-1">
                Sign Up
              </Link>
            </Typography>
          </div>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/id2.jpeg"
          className="h-full w-full object-cover rounded-3xl"
          alt="ID Illustration"
        />
      </div>
    </section>
  );
}

export default SignIn;
