import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <nav>vavbar</nav>
      <Outlet />
      <aside>aside</aside>
    </div>
  );
}
