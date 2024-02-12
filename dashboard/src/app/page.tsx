import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
export default function Home() {

  const cardData: CardProps[] = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      discription: "+20.1% from last month",
      icon: DollarSign
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      discription: "+180.1% from last month",
      icon: Users
    },
    {
      label: "Sales",
      amount: "+12,234",
      discription: "+19% from last month",
      icon: CreditCard
    },
    {
      label: "Active Now",
      amount: "+573",
      discription: "+201 since last hour",
      icon: Activity
    }
  ];

  return (
    <div className="flex flex-col gap-5 w-full">

       <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d,i)=> <Card key={i} amount={d.amount} discription={d.discription} icon={d.icon} label={d.label}/>)}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">

       <CardContent>
        <p className="p-4 font-semibold">Overview</p>
        <BarChart />
       </CardContent>

      </section>
    </div>
  );
}

