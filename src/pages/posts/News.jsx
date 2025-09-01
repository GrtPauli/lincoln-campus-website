import React from "react";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import MainLayout from "../../layouts/MainLayout";
import NewsCards from "../../components/posts/news/NewsCards";

export default function News() {
  return (
    <MainLayout>
      <div className="py-14 p-12">
        <div className="inline-block mb-9 text-center">
          <h2 className="text-3xl font-semibold">News</h2>
          <StyledUnderline />
        </div>

        <NewsCards />
      </div>
    </MainLayout>
  );
}
