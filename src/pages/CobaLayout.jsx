const CobaLayout = () => {
  return (
    <div className="container grid grid-cols-9 md:px-10 lg:px-0 lg:space-x-5">
      <div className="col-span-9 lg:col-span-2 bg-sky-500">
        <h1>data diri</h1>
      </div>
      <div className="col-span-9 lg:col-span-6 bg-red-500">
        <h1>content</h1>
      </div>
      <div className="hidden lg:inline-block lg:col-span-1 bg-gold-500">
        <h1>Halo</h1>
      </div>
    </div>
  );
};

export default CobaLayout;
