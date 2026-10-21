export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    description?: string;
    audience?: string;
    mode?: string;
    agenda?: { time: string; activity: string }[];
    organizer?: string;
    tags?: string[];
};

// Curated list of upcoming/popular developer events.
export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "09:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "KubeCon + CloudNativeCon Europe 2026",
        slug: "kubecon-cloudnativecon-eu-2026",
        location: "Europe",
        date: "2026-03-23",
        time: "09:00 AM",
    },
    {
        image: "/images/event5.png",
        title: "Google Cloud Next 2026",
        slug: "google-cloud-next-2026",
        location: "San Jose, CA, USA",
        date: "2026-04-07",
        time: "09:00 AM",
    },
    {
        image: "/images/event6.png",
        title: "ETHGlobal Hackathon: Paris 2026",
        slug: "ethglobal-paris-2026",
        location: "Paris, France",
        date: "2026-07-10",
        time: "10:00 AM",
    },
    {
        image: "/images/event-full.png",
        title: "Open Source Summit North America 2026",
        slug: "oss-na-2026",
        location: "Vancouver, Canada",
        date: "2026-06-22",
        time: "09:00 AM",
    },
    {
        image: "/images/event7.png",
        title: "Next Js Framework America 2026",
        slug: "nextjs-framework-america-2026",
        location: "UK, Pakistan",
        date: "2026-08-22",
        time: "10:00 AM",
    },
];