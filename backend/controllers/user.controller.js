import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
   try {
      const loggedInUserId = req.user._id;
      const filteredrUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
      res.status(200).json({ filteredrUsers });
   } catch (error) {
      console.log("Error in getUserForSidebar0", error.message);
      res.status(500).json({ error: "Internal server error" });
   }
};
