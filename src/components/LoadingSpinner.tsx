'use client'

import { Spinner } from "@nextui-org/react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Spinner
        size="lg"
        color="primary"
        labelColor="primary"
        label="Loading..."
      />
    </div>
  );
}