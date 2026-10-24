'use server';

import connectDB from "@/app/lib/mongodb";
import Booking from "@/database/booking.model";

export const createBooking = async ({
                                        eventId,
                                        slug,
                                        email,
                                    }: {
    eventId: string;
    slug: string;
    email: string;
}) => {
    try {
        await connectDB();

        const booking = await Booking.create({
            eventId,
            email,
        });

        return {
            success: true,
            booking: JSON.parse(JSON.stringify(booking))
        };
    } catch (e) {
        console.error('create booking failed', e);
        return {
            success: false,
            error: e instanceof Error ? e.message : 'Unknown error'
        };
    }
};