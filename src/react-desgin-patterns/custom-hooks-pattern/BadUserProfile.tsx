import { useEffect, useState } from "react";

export default function BadUserProfile() {
  const [isOnline, setIsOnline] = useState(false);
  const [lastActive, setLastActive] = useState<Date | null>(null);

  useEffect(() => {
    // Function to simulate checking user's online status
    const checkUserStatus = () => {
      // Randomly set online status
      const status = Math.random() > 0.5;
      console.log(status);
      setIsOnline(status);
      // If user goes offline, update last active timestamp
      if (!status) {
        setLastActive(new Date());
      }
    };

    // Set up interval to check status every 3 seconds
    const interval = setInterval(checkUserStatus, 3000);
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <span>Status: {isOnline ? "Online" : "Offline"}</span>
      {!isOnline && lastActive && (
        <span>Last seen: {lastActive.toLocaleString()}</span>
      )}
    </div>
  );
}
