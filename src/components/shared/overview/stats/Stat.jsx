import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Stat = ({ label, icon, stat }) => {
  return (
   <Card className="border border-gray-200 shadow-none bg-transparent">
      <CardHeader>
        <div className="flex gap-3">
             <CardDescription>{icon}</CardDescription>
          <p className="font-medium  ">{label}</p>
        </div>
      </CardHeader>
      <CardFooter>
        <CardTitle>{stat}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default Stat;
