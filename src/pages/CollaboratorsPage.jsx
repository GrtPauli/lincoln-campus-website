import React from "react";
import MainLayout from "../layouts/MainLayout";
import CollaboratorsList from "../components/collaborators/CollaboratorsList";
import Hero from "../components/common/ui/Hero";
import AboutUsImage from "../assets/about.png";

export default function CollaboratorsPage() {
  return (
    <MainLayout>
      <div>
        <Hero title="Collaborators" backgroundImage={AboutUsImage} />
        <CollaboratorsList />
      </div>
    </MainLayout>
  );
}
