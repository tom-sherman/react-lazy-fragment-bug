import { Fragment, Suspense, lazy } from "react";

const LazyFragment = lazy(() => Promise.resolve({ default: Fragment }));

function App() {
  return (
    <Suspense>
      <LazyFragment />
    </Suspense>
  );
}

export default App;
