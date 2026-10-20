'use client';

import posthog from "posthog-js";
import { posthogLogs } from "@/app/lib/posthog-logs";

const ExploreBtn = () => {
    const handleExploreClick = () => {
        if (process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
            posthog.capture("events_explored");
            posthogLogs.eventExplorationRequested();
        }
        console.log("CLICK");
    };

    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition"
                onClick={handleExploreClick}>
            <a href="#events" className="flex items-center gap-2">Explore Events
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </a>
        </button>
    );
};

export default ExploreBtn;