type buttonPropsType = {
  value: string;
  link: string;
  className?: string;
  backgoundColor?: string;
};

type tittleDescPropsType = {
  title: string;
  description: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
  className?: string;
};

type featureCardProps = {
  title: string;
  description: string;
};

type ServiceCardPropsType = {
  title: string;
  subtitle: string;
  Icon: SvgComponent;
};

type JourneyCardProps = {
  step: string;
  title: string;
  description: string;
};

type MentalIssueCardProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  href: string;
};