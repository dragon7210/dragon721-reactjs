import React, { Suspense } from "react";
import SuspenseFallback from "./pages/suspense";
import AppRoutes from "./routes";

function App() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
