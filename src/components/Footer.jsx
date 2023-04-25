import React from "react";

const Footer = () => (
  <footer className='dark:text-gray-200 text-gray-700 text-center my-5'>
    Copyright &copy; {new Date().getFullYear()} 校大学生科协 •{" "}
    <a href='https://github.com/MR-Addict/punch-frontend' className='underline'>
      Github
    </a>
  </footer>
);

export default Footer;
