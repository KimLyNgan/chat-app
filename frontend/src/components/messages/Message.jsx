import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
   const { authUser } = useAuthContext();
   const { selectedConversation } = useConversation();
   const fromMe = message.senderId === authUser._id;
   const chatClassName = fromMe ? "chat-end" : "chat-start";
   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
   const bubbleBgColor = fromMe ? "bg-blue-500" : "";
   const formattedTime = extractTime(message.createdAt);

   const shakeClass = message.shouldShake ? "shake" : "";
   return (
      <div className={`chat ${chatClassName}`}>
         <div className="chat-image avatar">
            <div className="w-10 rounded-full">
               <img src={profilePic} alt="Tailwind CSS chat buble component" />
            </div>
         </div>
         <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
         <div className="chat-footer opacity-50 text-xs flex gap-1 pb-2 items-center">{formattedTime}</div>
      </div>
   );
};

export default Message;
