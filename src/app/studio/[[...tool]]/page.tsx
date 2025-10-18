import React from "react";
import { NextStudio } from "next-sanity/studio";
import { studioConfig } from "../../../sanity/studioConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Content Studio for Sanity",
};

export default function StudioCatchAll() {
  return (
    <div className="min-h-screen">
      <NextStudio config={studioConfig} />
    </div>
  );
}
