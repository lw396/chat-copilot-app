import AuthGuard from "@utils/route-guard/AuthGuard";

const HomeLayout = () => {
  return <AuthGuard></AuthGuard>;
};

export default HomeLayout;
