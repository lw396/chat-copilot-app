import AuthGuard from "@utils/route-guard/AuthGuard";

import Drawer from "@layout/Home/Drawer";

const HomeLayout = () => {
  return (
    <AuthGuard>
      <Drawer />
    </AuthGuard>
  );
};

export default HomeLayout;
