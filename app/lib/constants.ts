export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string; // e.g., "2025-11-07"
    time: string; // e.g., "09:00 AM"
};

// Curated list of upcoming/popular developer events.
// Image assets live under public/images and can be used directly with
// via paths like "/images/event1.png".
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
        location: "Europe", // Agar location / date add karni ho toh yahan kar dein
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
        slug: "oss-na-2026",
        location: "UK, Pakistan",
        date: "2026-08-22",
        time: "10:00 AM",
    },
];