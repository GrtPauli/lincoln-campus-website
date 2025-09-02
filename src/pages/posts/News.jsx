import React, { useEffect, useState } from "react";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import MainLayout from "../../layouts/MainLayout";
import NewsCards from "../../components/posts/news/NewsCards";
import { GeneralService } from "../../services";
import { AppLoader } from "../../components/common/Loader";

export default function News() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const exec = async () => {
      const news = await GeneralService.getAllNews();
      setData({
        news,
      });
      setLoading(false);
    };

    exec();
  }, []);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <MainLayout>
          <div className="py-14 p-12">
            <div className="inline-block mb-9 text-center">
              <h2 className="text-3xl font-semibold">News</h2>
              <StyledUnderline />
            </div>

            <NewsCards news={data?.news?.data} />
          </div>
        </MainLayout>
      )}
    </>
  );
}
