const express = require("express") ; 
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require("../controllers/chatController");
const router = express.Router() ; 


router.route("/").post(protect, accessChat); 
router.get("/", protect, fetchChats); 
router.post("/group", protect, createGroupChat); 
router.put("/rename", protect, renameGroup);
router.put("/groupremove", protect, removeFromGroup);
router.put("/groupadd", protect, addToGroup);

module.exports = router ;