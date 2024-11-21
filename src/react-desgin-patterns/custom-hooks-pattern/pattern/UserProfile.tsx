import useUserProfile from "./useUserProfile";

export default function UserProfile() {
  const { isOnline, lastActive } = useUserProfile();
  return (
    <div>
      <span>Status: {isOnline ? "Online" : "Offline"}</span>
      {!isOnline && lastActive && (
        <span>Last seen: {lastActive.toLocaleString()}</span>
      )}
    </div>
  );
}
