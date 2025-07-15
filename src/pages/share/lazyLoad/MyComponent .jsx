import React, { lazy, Suspense } from 'react';

// Lazy load the component
const OtherComponent = lazy(() => import('./OtherComponent'));

const MyComponent = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<div className="text-center text-gray-500">Loading component...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
};

export default MyComponent;
