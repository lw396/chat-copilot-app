import React from "react";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import Footer from "./Footer";

function LoginPage() {
  return (
    <main className="flex flex-col items-center p-8 rounded-2xl max-md:px-1.5">
      <Header />
      <WelcomeSection />
      <Footer />
    </main>
  );
}

export default LoginPage;
