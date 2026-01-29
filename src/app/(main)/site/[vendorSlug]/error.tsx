"use client";

import React from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function VendorDetailError({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Vendor Detail Error</h2>
      <p className="text-lg mb-6">
        {error.message || "Could not load vendor details."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}