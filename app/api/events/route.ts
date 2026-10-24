import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import { v2 as cloudinary } from 'cloudinary';
import Event from "@/database/event.model";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Handle GET requests (Sorted events fetch karne ke liye)
export async function GET() {
    try {
        await connectDB();
        // Yahan .lean() add kar diya gaya hai taake plain objects return hon
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ message: 'Events fetched successfully', events }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            {
                message: 'Event fetching failed',
                error: e instanceof Error ? e.message : 'Unknown'
            },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const formData = await req.formData();

        let event: any;

        try {
            event = Object.fromEntries(formData.entries());
        } catch {
            return NextResponse.json(
                { message: 'Invalid JSON data format' },
                { status: 400 }
            );
        }

        // Image file get karein
        const file = formData.get('image') as File;
        if (!file) {
            return NextResponse.json({ message: 'Image file is required' }, { status: 400 });
        }

        let tags = JSON.parse(formData.get('tags') as string);
        let agenda = JSON.parse(formData.get('agenda') as string);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Cloudinary par upload karne ke liye Promise use karein
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { resource_type: 'image', folder: 'DevEvent' },
                (error, results) => {
                    if (error) return reject(error);

                    resolve(results);
                }
            ).end(buffer);
        });

        // Cloudinary ka secure URL assign karein
        event.image = (uploadResult as { secure_url: string }).secure_url;

        // Event create karein
        const createdEvent = await Event.create({
            ...event,
            tags: tags,
            agenda: agenda,
        });

        return NextResponse.json(
            { message: 'Event created successfully', event: createdEvent },
            { status: 201 }
        );

    } catch (e) {
        console.error(e);
        return NextResponse.json(
            {
                message: 'Event Creation Failed',
                error: e instanceof Error ? e.message : 'Unknown'
            },
            { status: 500 }
        );
    }
}