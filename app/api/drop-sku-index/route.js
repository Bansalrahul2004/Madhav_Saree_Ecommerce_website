import { connectDB } from "@/lib/databaseConnection"
import mongoose from "mongoose"

export async function POST(request) {
    try {
        await connectDB()
        
        const db = mongoose.connection.db;
        const collection = db.collection('productvariants');
        
        // Get all indexes
        const indexes = await collection.indexes();
        console.log('Current indexes:', indexes);
        
        // Drop the unique index on sku if it exists
        try {
            await collection.dropIndex('sku_1');
            console.log('Successfully dropped sku_1 index');
        } catch (error) {
            if (error.code === 27) {
                console.log('sku_1 index does not exist');
            } else {
                console.error('Error dropping sku_1 index:', error);
                return Response.json({ success: false, message: 'Error dropping index: ' + error.message });
            }
        }
        
        // List indexes after dropping
        const indexesAfter = await collection.indexes();
        console.log('Indexes after dropping:', indexesAfter);
        
        return Response.json({ 
            success: true, 
            message: 'SKU unique index dropped successfully',
            indexes: indexesAfter
        });
        
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ 
            success: false, 
            message: 'Error: ' + error.message 
        });
    }
}
