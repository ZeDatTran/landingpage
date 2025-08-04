import { useEffect } from "react";
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxPnPEM7sHtdpYcYRK5bE9bXOCXJXusHuXO18RSRakRC_Rh4frsvvgHKeDbWVLGq9qATg/exec";

const sendToGoogleSheet = (sectionId) => {
  fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors", // Google Script không cần phản hồi
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      section: sectionId,
      page: window.location.pathname,
    }),
  });
};

const TRACKED_SECTIONS = [
  "hero",
  "about",
  "features",
  "issues",
  "solutions",
  "results",
  "testimonials",
  "form",
];

const useScrollTracking = () => {
  useEffect(() => {
    const sentSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting && !sentSections.has(id)) {
            // Gửi custom event lên HubSpot
            // if (window._hsq) {
            //   window._hsq.push([
            //     "trackCustomBehavioralEvent",
            //     {
            //       name: `viewed_${id}`,
            //       properties: {
            //         section: id,
            //         timestamp: new Date().toISOString(),
            //       },
            //     },
            //   ]);
            //   console.log(`📩 Đã gửi event HubSpot: viewed_${id}`);

            // }
            sendToGoogleSheet(id);
            sentSections.add(id);
          }
        });
      },
      {
        threshold: 0.8, // Chỉ trigger khi phần tử hiển thị toàn bộ
      }
    );

    // Bắt đầu theo dõi các section
    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollTracking;