import {React} from 'react'
import OpenAI from 'openai'

const ChatGpt = () => {

    const API_KEY = "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" // tutaj klucz na gpt

    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true
    })

    const AskQuestion = (mess) => {
        // const chatCompletion = openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: [{"role": "user", "content": mess}],
        // });

        // return JSON.stringify(chatCompletion);
        return "nie działa"
    }

    return(
        <div id="chat">
            <p>{AskQuestion("Witaj tatusiu")}</p>
        </div>
    );
}

export default ChatGpt;