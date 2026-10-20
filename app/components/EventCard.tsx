"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Clock } from "lucide-react";
import posthog from "posthog-js";
import { posthogLogs } from "@/app/lib/posthog-logs";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
    return (
        <Link
            href={`/events/${slug}`}
            id="event-card"
            onClick={() => {
                if (process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
                    posthog.capture("event_details_opened", { event_slug: slug });
                    posthogLogs.eventDetailsOpened(slug);
                }
            }}
        >
            {/* Event Poster Image */}
            <Image
                src={image}
                alt={title}
                width={410}
                height={300}
                className="poster"
            />

            {/* Location Section */}
            <div className="flex flex-row gap-2 items-center">
                <MapPin size={14} className="text-gray-400" />
                <p>{location}</p>
            </div>

            {/* Title */}
            <p className="title">{title}</p>

            {/* Date and Time Section */}
            <div className="datetime">
                <div className="flex flex-row gap-1 items-center">
                    <Calendar size={14} className="text-gray-400" />
                    <p>{date}</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <Clock size={14} className="text-gray-400" />
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;