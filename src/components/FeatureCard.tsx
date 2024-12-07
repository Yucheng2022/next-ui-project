'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = "" }: FeatureCardProps) {
  return (
    <Card className={`p-4 hover:scale-105 transition-transform ${className}`}>
      <CardHeader className="pb-2 pt-1 px-4 flex gap-3 items-start">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="font-bold text-large">{title}</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-default-500">{description}</p>
      </CardBody>
    </Card>
  );
}
