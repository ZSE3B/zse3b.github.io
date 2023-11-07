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
        // })

        // if(chatCompletion) return "not working now";

        // return chatCompletion.choices[0].message;
        return "not working"
    }

    return(
        <div id="chat">
            <form>
                <label for="gender">podaj płeć</label><input id="gender" name="gender" maxLength="16" type="text"/> <br/>
                <label for="ifWeather">Podaj miejsce pogody</label> <input id="ifWeather" name="ifWeather" type="text"/>
                <textarea id="more" name="more" placeholder="Dodatkowe informacje typu: pogrzeb psa babci, urodziny twojej mamusi, etc."></textarea>
            </form>
            {AskQuestion("m")}
        </div>
    );
}

export default ChatGpt;