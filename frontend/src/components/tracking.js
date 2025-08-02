import { useEffect } from "react";

function useScrollTracking() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const triggered = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const percent = Math.round((scrollTop + windowHeight) / documentHeight * 100);

      thresholds.forEach((t) => {
        if (percent >= t && !triggered.has(t)) {
          triggered.add(t);
          console.log(`Scrolled ${t}%`);
        //   sendTrackingEvent(`scroll_${t}_percent`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
export default useScrollTracking;