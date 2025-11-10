import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CustomButton = ({
  value,
  link,
  className,
  backgoundColor,
}: buttonPropsType) => {
  return (
    <Button
      style={{ backgroundColor: backgoundColor || "#FDF2E9" }}
      className={cn(
        "text-green-800 font-semibold px-12 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-100 transition-all duration-300 max-md:hidden focus:outline-none focus:ring-2 focus:ring-green-600 w-fit",
        className
      )}
      aria-label="Login"  
    >
      <Link href={link}>{value}</Link>
    </Button>
  );
};

export default CustomButton;
