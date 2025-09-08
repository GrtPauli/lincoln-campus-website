import React from "react";
import CollaboratorsList from "../../components/collaborators/CollaboratorsList";
import MainLayout from "../../layouts/MainLayout";

export default function CollaboratorsPage() {
  return (
    <MainLayout>
      <CollaboratorsList />
    </MainLayout>
  );
}