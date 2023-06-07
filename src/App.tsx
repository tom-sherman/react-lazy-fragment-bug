import { Suspense, lazy } from "react";

const LazyFragment = lazy(() => import("./LazyFragment"));

function App() {
  return (
    <Suspense>
      <LazyFragment />
    </Suspense>
  );
}

export default App;
