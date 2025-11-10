import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface MentalIssueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const MentalIssueCard = ({
  title,
  description,
  imageSrc,
}: MentalIssueCardProps) => {
  return (
    <Card className="group w-full max-w-sm overflow-hidden rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-400">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={`Image representing ${title}`}
          fill
          priority
          className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="pb-1">
        <CardTitle className="text-lg font-bold text-green-800 group-hover:text-green-900 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-sm ">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MentalIssueCard;
