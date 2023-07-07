import Button from './Button';

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-red-800">
      <h1 className="pb-8 text-base font-semibold text-white lg:pb-14 lg:text-3xl">
        Welcome to Yakiniku Hokuden!!!
      </h1>

      <Button to="/menu" type="primary">
        Let's order
      </Button>
    </div>
  );
}

export default Home;
