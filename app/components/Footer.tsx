const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-black py-8 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>123 Beach Avenue</p>
          <p>Sunny City, SC 12345</p>
          <p>Email: contact@djanobnb.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">About HavenStay</h2>
          <p>Your trusted platform for finding unique stays and experiences. Discover the world with comfort and style.</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} HavenStay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
