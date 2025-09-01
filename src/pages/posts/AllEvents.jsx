import React from "react";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import MainLayout from "../../layouts/MainLayout";
import EventsCards from "../../components/posts/events/EventsCards";

export default function AllEvents() {
 


  return (
    <MainLayout>
      <div className="py-14 p-12">
        <div className="inline-block mb-9 text-center">
          <h2 className="text-3xl font-semibold">Events</h2>
          <StyledUnderline />
        </div>

        <EventsCards />
      </div>
    </MainLayout>
  );
}
