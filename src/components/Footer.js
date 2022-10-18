import React from "react";

const Footer = () => (
  <p className='dark:text-gray-200 text-gray-700 text-center m-5'>
    &copy;{` Copyright ${new Date().getFullYear()} 校大学生科协`}
  </p>
);

export default Footer;
