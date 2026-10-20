import { events } from "@/app/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function EventDetailsPage({ params }: Props) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 text-white">
            {/* Event Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{event.title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Image, Overview, Event Details, Agenda & About Organizer */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Overview Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Overview</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {event.title} brings together developers, innovators, and industry leaders
                            from around the world. This flagship event dives deep into the future of software,
                            open source, and AI-driven development.
                        </p>
                    </div>

                    {/* Event Details Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Event Details</h2>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-3">
                                <Calendar className="text-gray-400" size={20} />
                                <p><strong>Date:</strong> {event.date}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-gray-400" size={20} />
                                <p><strong>Time:</strong> {event.time}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-gray-400" size={20} />
                                <p><strong>Venue:</strong> {event.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Agenda Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Agenda</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside">
                            <li><strong>09:30 AM - 10:30 AM</strong> | Opening Keynote: The Future of AI & Open Source[cite: 36]</li>
                            <li><strong>10:45 AM - 12:00 PM</strong> | Breakout Sessions (Security, DevOps, Cloud, AI)[cite: 36]</li>
                            <li><strong>12:00 PM - 01:00 PM</strong> | Lunch & Networking[cite: 36]</li>
                            <li><strong>01:00 PM - 02:15 PM</strong> | Panel Discussion: Scaling Open Source Communities[cite: 36]</li>
                            <li><strong>02:30 PM - 04:00 PM</strong> | Expert Workshops & Demos[cite: 36]</li>
                            <li><strong>04:15 PM - 05:00 PM</strong> | Closing Fireside Chat[cite: 36]</li>
                        </ul>
                    </div>

                    {/* About the Organizer Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">About the Organizer</h2>
                        <p className="text-gray-300 leading-relaxed">
                            GitHub is the world's leading platform for developers to build, share, and maintain code.
                            From open source to enterprise, GitHub empowers millions of developers and organizations
                            to innovate faster and more securely[cite: 36].
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {event.title} is its annual developer conference, uniting the global dev community to
                            share knowledge, tools, and inspiration that shape the future of software[cite: 36].
                        </p>
                    </div>
                </div>

                {/* Right Side: Book Your Spot Form */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit space-y-6">
                    <h3 className="text-2xl font-bold text-white">Book Your Spot</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-400 hover:bg-teal-500 text-gray-950 font-semibold rounded-lg transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}