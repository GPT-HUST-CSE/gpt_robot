import Message from './Message'

export default class Conversation {
    id: number;
    title: string;
    time: Date;
    prompt: string;
    messages: Message[] = []


    constructor({ id = 0, title = "新的聊天", time = new Date(), prompt = "有什么可以帮你的吗" } = {}) {
        this.id = id
        this.title = title
        this.time = time
        this.prompt = prompt
    }

    getMessageLength() {
        return this.messages.length
    }
}