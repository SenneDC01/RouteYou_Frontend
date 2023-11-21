import React from "react";
import Image from "next/image";
import logo from "../utils/images/logo.png";

const Footer = () => {
  return (
    <footer
      className="flex items-center p-4"
      style={{
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "-8px", // anders is de shadow niet goed
      }}
    >
      <Image src={logo} priority={true} alt="Logo" width={250} />

      <div className="flex flex-1 justify-between px-4">
        {/* Column 1 */}
        <div className="flex flex-col">
          <div className="p-2 bg-gray-200">Home</div>
          <div className="p-2 bg-gray-200">Home</div>
          <div className="p-2 bg-gray-200">Home</div>
          <div className="p-2 bg-gray-200">Home</div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <div className="p-2 bg-gray-200">row 1</div>
          <div className="p-2 bg-gray-200">row 2</div>
          <div className="p-2 bg-gray-200">row 3</div>
          <div className="p-2 bg-gray-200">row 4</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <div className="p-2 bg-gray-200">row 1</div>
          <div className="p-2 bg-gray-200">row 2</div>
          <div className="p-2 bg-gray-200">row 3</div>
          <div className="p-2 bg-gray-200">row 4</div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <div className="font-semibold">Adres</div>
          <div>Kerkstraat 108</div>
          <div>9050 Gentbrugge, België</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
