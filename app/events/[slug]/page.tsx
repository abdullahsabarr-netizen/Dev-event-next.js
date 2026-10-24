import Event from "@/database/event.model";
import connectDB from "@/app/lib/mongodb";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import BookEvent from "@/app/components/BookEvent"; // 👈 1. BookEvent import kiya

export const instant = false;

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function EventDetailsPage({ params }: Props) {
    await connection();

    const { slug } = await params;

    await connectDB();
    const event = await Event.findOne({ slug });

    if (!event) {
        notFound();
    }

    const similarEvents = await Event.find({ _id: { $ne: event._id } }).limit(3);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{event.title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Overview</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {event.overview || event.description || `${event.title} brings together developers, innovators, and industry leaders.`}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Event Details</h2>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-3">
                                <Calendar className="text-gray-400" size={20} />
                                <p><strong>Date:</strong> {event.date}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-gray-400" size={20} />
                                <p><strong>Time:</strong> {event.time || "10:00 AM"}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-gray-400" size={20} />
                                <p><strong>Venue:</strong> {event.location || event.venue}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Agenda</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside">
                            {event.agenda && event.agenda.length > 0 ? (
                                event.agenda.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))
                            ) : (
                                <>
                                    <li>08:30 AM - 09:30 AM | Keynote: AI-Driven Cloud Infrastructure</li>
                                    <li>09:45 AM - 11:00 AM | Deep Dives: Kubernetes, Data Analytics</li>
                                    <li>11:15 AM - 12:30 PM | Product Demos & Networking</li>
                                    <li>12:30 PM - 01:30 PM | Lunch & Break</li>
                                    <li>01:30 PM - 03:00 PM | Workshops & Live Coding</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">About the Organizer</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {event.organizer || "Google Cloud organizes Cloud Next to connect global businesses, developers, and innovators with the latest technologies."}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-3">
                            {(event.tags && event.tags.length > 0 ? event.tags : ["Cloud", "DevOps", "Kubernetes", "AI"]).map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-[#131926] text-gray-300 rounded-lg text-sm border border-gray-800 font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: 👈 2. Yahan BookEvent component lagaya gaya hai */}
                <div>
                    <BookEvent eventId={event._id.toString()} slug={event.slug} />
                </div>
            </div>

            {/* Similar Events */}
            <div className="mt-16 space-y-6">
                <h2 className="text-3xl font-bold text-white">Similar Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {similarEvents && similarEvents.length > 0 ? (
                        similarEvents.map((simEvent) => (
                            <Link
                                href={`/events/${simEvent.slug}`}
                                key={simEvent._id.toString()}
                                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition block p-4 space-y-3"
                            >
                                <div className="relative w-full h-44">
                                    <Image
                                        src={simEvent.image}
                                        alt={simEvent.title}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white hover:text-teal-400 transition-colors">
                                    {simEvent.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{simEvent.location}</p>
                                <p className="text-teal-400 text-sm font-medium">{simEvent.date}</p>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-400">No similar events found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}