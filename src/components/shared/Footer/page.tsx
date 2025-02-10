const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-bold">Support</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Github</a>
              <a href="#" className="hover:text-gray-400">Whatsapp</a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} All rights reserved Mohammad Riaz</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  