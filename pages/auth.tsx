import { useState } from "react";
import Input from "./components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className=" w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 w-full lg:max-w-md self-center rounded-md mt-2">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
             <Input label="Username" onChange={(event: any) => setName(event.target.value)} id="name" value={name} />
             <Input label="Email" onChange={(event: any) => setEmail(event.target.value)} id="email" type="email" value={email} />
             <Input label="Password" onChange={(event: any) => setPassword(event.target.value)} id="password" type="password" value={password} />
            </div>
            <button className="bg-red-600 text-white rounded-md w-full py-3 mt-10 hover:bg-red-700 transition">Login</button>
            <p className="text-neutral-500 mt-12">
              First time using Netflix?
              <span className="text-white ml-1 hover:underline cursor-pointer">Create an account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
