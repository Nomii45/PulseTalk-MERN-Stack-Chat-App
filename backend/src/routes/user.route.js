import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import {
    getMyFriends,
    getRecommendedUsers,
    sendFriendRequest,
    acceptFriendRequest,
    getFriendRequests,
    getOutgoingFriendReqs
} from "../controllers/user.controller.js"
const router = express.Router()

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

// SENDING A FRIEND REQUEST
router.post("/friend-request/:id", sendFriendRequest)
//ACCEPTING A FRIEND REQUEST
router.put("/friend-request/:id/accept", acceptFriendRequest)
// GET FRIEND REQUEST
router.get("/friend-request", getFriendRequests)
router.get("/outgoing-friend-request", getOutgoingFriendReqs)
export default router;
