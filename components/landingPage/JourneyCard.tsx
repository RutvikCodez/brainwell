import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface JourneyCardProps {
  description: string;
  step: string;
  title: string;
}

const JourneyCard = ({ description, step, title }: JourneyCardProps) => {
  return (
    <Card className="w-full bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] border border-[#1F3B2C] shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-3xl font-bold text-black">{step}</CardTitle>
        <CardDescription className="text-lg text-[#1F3B2C]">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default JourneyCard;
