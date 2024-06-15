const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-8 mb-5">
      <p className="text-base text-bodytext dark:text-abuDark text-center">© {currentYear} All Rights Reserved by Adi Pramana</p>
    </footer>
  );
};

export default Footer;
