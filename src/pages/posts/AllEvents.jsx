import React, { useEffect, useState } from "react";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import MainLayout from "../../layouts/MainLayout";
import EventsCards from "../../components/posts/events/EventsCards";
import { GeneralService } from "../../services";
import { AppLoader } from "../../components/common/Loader";

export default function AllEvents() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const exec = async () => {
      const events = await GeneralService.getAllEvents()
      setData({
        events,
      })
      setLoading(false)
    }

    exec()
  }, [])

  return (
    <>
      {loading ? <AppLoader/> : (
        <MainLayout>
          <div className="py-14 p-12">
            <div className="inline-block mb-9 text-center">
              <h2 className="text-3xl font-semibold">Events</h2>
              <StyledUnderline />
            </div>

            <EventsCards events={data?.events?.data}/>
          </div>
        </MainLayout>
      )}
    </>
  );
}
