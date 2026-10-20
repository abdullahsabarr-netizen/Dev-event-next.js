import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Clock } from "lucide-react";

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
        <Link href={`/events/${slug}`} id="event-card">
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