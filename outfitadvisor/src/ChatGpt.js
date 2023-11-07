import {React} from 'react'
import OpenAI from 'openai'
import './ChatGpt.scss';

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
        return "not working yet"
    }

    return(
        <div id="chat">
            <form>
                <label for="gender">Podaj płeć</label><br/>
                <input id="gender" name="gender" type="text"/> <br/>
                <label for="ifWeather">Podaj miejscowość </label> <br/>
                <input id="ifWeather" name="ifWeather" type="text"/><br/>
                <label for="more">Podaj dodatkowe info</label><textarea id="more" name="more" placeholder="np: urodziny psa babci, granie w koszykówkę, etc."></textarea> <br/>
                <button >Prześlij</button>
            </form>
            <p id="answer">{AskQuestion("m")}</p>
        </div>
    );
}

export default ChatGpt;