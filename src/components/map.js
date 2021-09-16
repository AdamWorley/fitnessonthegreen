// map.js
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useStaticQuery, graphql } from "gatsby";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const Map = () => {
  const { site } = useStaticQuery(query);
  const mapContainerRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: site.siteMetadata.mapboxToken,
      style: "mapbox://styles/mada360/ckr9gjj911tot18ny32hxbkgz",
      center: [-0.1929794649752272, 51.08398886601107],
      zoom: 14,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    const marker = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.1929794649752272, 51.08398886601107],
      },
      properties: {
        title: "The Green",
        description: "Woodgate Pease Pottage West Sussex RH11 9GX",
      },
    };

    var el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            "<h3>" +
              marker.properties.title +
              "</h3><p>" +
              marker.properties.description +
              "</p>"
          )
      )
      .addTo(map);

    setMap(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={mapContainerStyle} />;
};

const query = graphql`
  query Token {
    site {
      siteMetadata {
        mapboxToken
      }
    }
  }
`;

export default Map;
