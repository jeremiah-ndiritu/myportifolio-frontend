import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export type Announcement = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const STORAGE_KEY = "dismissed-announcements";

const seedAnnouncements: Announcement[] = [
  {
    id: "freemiah",
    title: "Introducing Freemiah",
    description:
      "A simpler, more focused way to explore Jeremiah's work, ideas, and next steps.",
    href: "/freemiah",
    cta: "Learn more",
  },
];

const readDismissedAnnouncements = (): string[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
};

export const useAnnouncements = () => {
  const [dismissedIds, setDismissedIds] = useState<string[]>(() =>
    readDismissedAnnouncements(),
  );

  const query = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => seedAnnouncements,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.clear()
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dismissedIds));
  }, [dismissedIds]);

  const announcements = useMemo(
    () => (query.data ?? []).filter(({ id }) => !dismissedIds.includes(id)),
    [dismissedIds, query.data],
  );

  const dismissAnnouncement = (id: string) => {
    setDismissedIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
  };

  return {
    announcements,
    dismissAnnouncement,
    isPending: query.isPending,
    isError: query.isError,
    error: query.error,
  };
};
