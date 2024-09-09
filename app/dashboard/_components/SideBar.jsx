import Image from "next/image";
import React from "react";

function SideBar() {
  const menu = [
    {
      id: 1,
      icon: "",
      path: "/dashboard",
    },
  ];

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/logoo.png"} width={160} height={100} />
    </div>
  );
}

export default SideBar;
