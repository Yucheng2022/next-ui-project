'use client'

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <Card className="max-w-[500px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-danger">Error Occurred</p>
            <p className="text-small text-default-500">Something went wrong</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <p className="text-default-500">{error.message}</p>
            <Button 
              color="primary" 
              variant="flat" 
              onPress={reset}
            >
              Try Again
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
