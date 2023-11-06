import {React} from 'react'
import OpenAI from 'openai'

const ChatGpt = () => {

    const API_KEY = "" // tutaj klucz na gpt

    const openai = new OpenAI({
        apiKey: API_KEY
    })

    const AskQuestion = (mess) => {

    }

    return(
        <div id="ai">
            już nie tak pusto
        </div>
    );
}

export default ChatGpt;