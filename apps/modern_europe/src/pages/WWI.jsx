import React, { useEffect } from "react";
import { PageTemplateLeaflet } from "ui";
import { useMap1900, useMap1914, useMapCenterOfFirstMap } from "ui";

export function WWI() {
  const mapCenter = useMapCenterOfFirstMap();
  useMap1900();
  useMap1914();

  return (
    <PageTemplateLeaflet
      url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/27-wwi.json"
      mapCenter={mapCenter}
    />
  );
}
