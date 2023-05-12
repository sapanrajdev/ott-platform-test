import React from "react";
import { Routes, Route } from "react-router-dom";
const ListingPageContainer = React.lazy(() =>
  import("../containers").then(({ ListingPageContainer }) => ({
    default: ListingPageContainer,
  }))
);

const MainRoutes = () => {
  return (
    <React.Suspense fallback={<h3>Loading... </h3>}>
      <Routes>
        <Route path="/" element={<ListingPageContainer />} />
      </Routes>
    </React.Suspense>
  );
};
export default MainRoutes;
