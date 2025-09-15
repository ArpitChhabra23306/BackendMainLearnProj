import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // User who is subscribing
        ref: "User",
    },
    channel: {
        type: Schema.Types.ObjectId, // Channel being subscribed to
        ref: "User",
    },
},{timestamps: true});


export const Subscription = mongoose.model("Subscription", subscriptionSchema);