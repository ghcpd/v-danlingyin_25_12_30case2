const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-new-year-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">
            &copy; {currentYear} New Year Cultural Website. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Celebrating traditions and cultures from around the world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
