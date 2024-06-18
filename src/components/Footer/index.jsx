const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-5 pb-5 bg-[#f8fbfb] dark:bg-[#0d0d0d]">
      <p className="text-base text-bodytext dark:text-abuDark text-center">© {currentYear}, by Laba Adi Pramana</p>
    </footer>
  );
};

export default Footer;
