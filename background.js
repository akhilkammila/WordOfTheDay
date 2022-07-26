
//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) =>{
    if(msg.name=='fetchWords'){

        //Call api
        const apiKey = 'fornow';
        const dateStr = new Date().toISOString().slice(0,10);
        const apiCall = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" + dateStr + "&api_key=" + apiKey;

        const wordsObj = [
            "spumone",
            "abeam",
            "draconian",
            "dissent",
            "choice",
            "opprobrious",
            "prerogative",
        ];

        const wordsDescObj=[
            "an Italian style of ice cream of a very fine and smooth texture, usually containing layers of various colors and flavors and chopped fruit or nuts",
            "directly abreast the middle of a ship's side.",
            "rigorous; unusually severe or cruel.",
            "disagreement with the philosophy, methods, goals, etc., of a political party or government.",
            "the right, power, or opportunity to choose; option.",
            "outrageously disgraceful or shameful.",
            "a right, privilege, etc., limited to a specific person or to persons of a particular category."
        ];

        let number = Math.floor(Math.random()*Math.floor(wordsObj.length))

        //Send Response
        response({word: wordsObj[number], desc: wordsDescObj[number]})
        //response({api: apiCall, date: dateStr});
    }
});