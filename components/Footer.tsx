import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [date, setDate ] = useState(0)

  useEffect(() => {
    setDate(new Date().getFullYear())
  }, [])
  
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p className="text-sm">© {date} Neon Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
