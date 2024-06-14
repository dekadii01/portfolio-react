import MenuItem from "../MenuItem";

const CardRight = () => {
  return (
    <div className="hidden lg:inline-block lg:col-span-1 bg-white dark:bg-black rounded-xl p-5 z-10 h-fit">
      <MenuItem path="/" menu="Home" />
      <MenuItem path="/about" menu="About" />
      <MenuItem path="/portfolio" menu="Portfolio" />
      <MenuItem path="/contact" menu="Contact" />
    </div>
  );
};

export default CardRight;
