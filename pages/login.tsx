import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { loginUser } from "../services/firebaseFunc";
import { useAuthStore } from "../store";

const LoginPage = (): React.ReactElement => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const addAuth = useAuthStore((store: any) => store.addAuth);

  const router = useRouter();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const guestLogin = () => {
    setUserData({ email: "johndoe@gmail.com", password: "john@test@1234" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(userData.email, userData.password);
      addAuth(res.user.uid);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center sm:col-span-12 lg:col-span-10">
      <form onSubmit={handleSubmit}>
        <div className="m-auto h-fit w-80 space-y-4 rounded-md border p-6 shadow-md dark:border-dark-border dark:bg-dark-background">
          <h1 className="text-2xl font-semibold dark:text-dark-text">Login</h1>
          <div className="space-y-3">
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="email">
                Email
              </label>
              <input
                className="border p-2 dark:border-dark-border dark:bg-transparent dark:text-dark-text dark:placeholder:text-gray-500"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                required
                value={userData.email}
                onChange={inputHandler}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="password">
                Password
              </label>
              <input
                className="border p-2 dark:border-dark-border dark:bg-transparent dark:text-dark-text dark:placeholder:text-gray-500"
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                required
                value={userData.password}
                onChange={inputHandler}
              />
            </span>
          </div>
          <div className="space-y-2 pt-3">
            <span className="flex flex-col space-y-2">
              <button className="rounded-sm border p-2 font-semibold dark:border-dark-border dark:bg-dark-primary dark:text-dark-text">
                Login
              </button>
              <button
                className="rounded-sm bg-yellow-800 p-2 font-semibold text-white hover:bg-opacity-90 active:opacity-95"
                onClick={guestLogin}
              >
                Login As Guest
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium hover:underline dark:text-dark-primary">
              <Link href="/signup">Create New Account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
