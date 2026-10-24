'use client';

import React, { useState } from 'react';
import { createBooking } from "@/app/lib/actions/booking.actions";

interface Props {
    eventId: string;
    slug: string;
}

export default function BookEvent({ eventId, slug }: Props) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Type assertion add ki hai taake TS2339 error khatam ho jaye
            const res = (await createBooking({ eventId, slug, email })) as {
                success?: boolean;
                error?: string;
            };

            if (res?.success) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('Booking error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit space-y-6">
            <h3 className="text-2xl font-bold text-white">Book Your Spot</h3>

            {isSubmitted ? (
                <div className="space-y-3">
                    <p className="text-gray-400">
                        Join 10 people who have already booked their spot!
                    </p>
                    <p className="text-teal-400 font-semibold text-lg">
                        Thank you for signing up!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-teal-400 hover:bg-teal-500 text-gray-950 font-semibold rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    );
}