import React from "react";
import Image from "next/image";

export const LogoSimple = () => {
  return (
    <Image src={"/logos/logo.png"} height={44} width={44} alt="Logo Icon" />
  );
};
