import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";
import ManagementContent from "../components/collaborators/management";

export default function ManagementPage() {
  return (
    <MainLayout>
      <div>
        <Hero
          title="Management"
          backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />

        <ManagementContent/>
      </div>
    </MainLayout>
  );
}
