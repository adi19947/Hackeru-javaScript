function howManyWordsInSentence(sentence) {
    let count = 0;
    for (let index = 0; index < sentence.length; index++) {
        console.log(sentence[index]);
        if (sentence == " ") {
            count++
        }
        return count + 1;
    }
}


function Sign(city, content, pic) {
    this.city = city;
    this.content = content;
    this.pic = pic;
    this.price = howManyWordsInSentence(this.content) * 100;

}

