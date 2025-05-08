import * as Avatar from "@radix-ui/react-avatar";

export const UserAvatar = ({ userName, imageUrl }) => {
  const initials = userName
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar.Root className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
      {imageUrl ? (
        <Avatar.Image
          src={imageUrl}
          alt={userName}
          className="w-full h-full object-cover"
        />
      ) : (
        <Avatar.Fallback
          delayMs={200}
          className="text-sm font-medium text-gray-800"
        >
          {initials}
        </Avatar.Fallback>
      )}
    </Avatar.Root>
  );
};
