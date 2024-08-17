import { useEffect, useState } from "react";

export function useGetRouteHash(link: string) {
  const [hash, setHash] = useState("");
  const [isActiveRoute, setIsActiveRoute] = useState(false);

  useEffect(() => {
    // Function to handle hash change
    const handleHashChange = () => {
      setHash(window.location.hash.substring(1)); // Get the hash part without the #
    };

    // Call the function on initial load
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hash]);

  return { hash, isActiveRoute };
}
