import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Card className="group bg-[#1F3B2C] text-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border border-zinc-700">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-wide group-hover:text-green-400 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
