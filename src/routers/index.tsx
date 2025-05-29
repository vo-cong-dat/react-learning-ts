// export default [
//   // index('./home.tsx'),
//   // route('about', './about.tsx'),

//   layout('../layouts/main-layout.tsx', [route('/home', '../pages/home.tsx')]),

//   // ...prefix('concerts', [
//   //   index('./concerts/home.tsx'),
//   //   route(':city', './concerts/city.tsx'),
//   //   route('trending', './concerts/trending.tsx'),
//   // ]),
// ];

import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/main-layout';
import Home from '../pages/home/home';
import PolicyPage from '../pages/policy';
import ProtectedRouter from './protected';

export default function Routing() {
  return (
    <Routes>
      <Route element={<ProtectedRouter />}>
        <Route element={<MainLayout />}>
          <Route index element={<div>Hello Page Index </div>} />
          <Route path="/home" element={<Home />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found | 404</div>} />
    </Routes>
  );
}
