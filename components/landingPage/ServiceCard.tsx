import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ Icon, subtitle, title }: ServiceCardPropsType) => {
  return (
    <Card
      tabIndex={0}
      className="group w-full p-5 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 focus-within:scale-105"
    >
      <CardContent className="flex justify-between items-center p-0">
        <div className="flex gap-2">
          <div className="p-4 rounded-full bg-[#1F3B2C] max-xl:hidden text-white">
            <Icon />
          </div>
          <div className="flex flex-col gap-2 max-xl:gap-1">
            <h3 className="text-xl font-semibold text-gray-800 max-xl:text-lg">
              {title}
            </h3>
            <p className="text-sm text-gray-800">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
