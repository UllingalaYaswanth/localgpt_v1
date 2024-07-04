import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth, Developer } from "@/layouts";
// import { Profile } from "./pages/dashboard";
// import { SignIn } from "./pages/auth";

// function App() {
//   return (
//     <Routes>
//       <Route path="/dashboard/*" element={<Dashboard />} />
//       <Route path="/developer/*" element={<Developer />} />
//       <Route path="/auth/*" element={<Auth />} />
//       <Route path="/user/*" element={<Profile />} /> {/* Assuming 'Profile' is the user's page */}
//       <Route path="/auth/sign-in" element={<SignIn />} />
//       <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
//     </Routes>
//   );
// }

// export default App;
