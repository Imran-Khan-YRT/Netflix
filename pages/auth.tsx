const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className=" w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 w-full lg:max-w-md self-center rounded-md mt-2">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
