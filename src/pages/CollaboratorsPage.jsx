import React from "react";
import MainLayout from "../layouts/MainLayout";
import CollaboratorsList from "../components/collaborators/CollaboratorsList";

export default function CollaboratorsPage() {
  return (
    <MainLayout>
      <CollaboratorsList />
    </MainLayout>
  );
}