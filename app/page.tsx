import ExploreBtn from "@/app/components/ExploreBtn";
import EventCard from "@/app/components/EventCard";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const Page = async () => {
        // Fresh data fetch karne ke liye cache disable kar sakte hain
        const response = await fetch(`${BASE_URL}/api/events`, { cache: 'no-store' });
        const { events } = await response.json();

    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center justify-center text-center py-16 md:py-24 max-w-4xl mx-auto">
                <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                    The Hub for Every Dev <br /> Event You Can&apos;t Miss
                </h1>
                <p className="subheading text-gray-400 text-lg md:text-xl text-center mb-8">
                    Hackathons, Meetups, and Conferences, All in One Place
                </p>
                <div className="flex justify-center w-full">
                    <ExploreBtn />
                </div>
            </section>

            {/* Featured Events Section */}
            <section id="events" className="w-full max-w-7xl mx-auto mt-10 px-4">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">Featured Events</h3>
                    <ul className="events list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events && events.length > 0 && events.map((event: IEvent) => (
                            <li key={event.slug} className="list-none">
                                <EventCard {...event} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Page;