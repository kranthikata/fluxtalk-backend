const createMessage = require("../services/createMessage");
const fetchAllMessages = require("../services/fetchAllMessages");

const sendMessage = async (request, response) => {
  const { content, chatId } = request.body;
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return response.send(400);
  }
  var newMessage = {
    sender: request.user._id,
    content: content,
    chat: chatId,
  };
  try {
    const message = await createMessage(newMessage, request.body.chatId);
    response.json(message);
  } catch (error) {
    response.status(400).json({ error: "error" });
  }
};

const getAllMessages = async (request, response) => {
  try {
    const { chatId } = request.params;
    const messages = await fetchAllMessages(chatId);
    response.json(messages);
  } catch (error) {
    response.status(400).json({ error: "error" });
  }
};
module.exports = { sendMessage, getAllMessages };
