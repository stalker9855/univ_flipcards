$(document).ready(function(){
    $('#prev').prop('disabled', true);
    class QA
    {
        constructor(word, translates) {
            this.word = word;
            this.translates = translates;
        }
    }
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    let flip_flag = false;
    let i = 0;
    let correct = 0;
    let wrong = 0;
    const all = 10;
    const correct_ = document.getElementById('correct');
    const wrong_ = document.getElementById('wrong');
    const front_word = document.getElementById('front_word');
    const back_word = document.getElementById('back_word');
    const translate_word = document.getElementById('translate_word');
    const switch_ = document.getElementById('switch');
    const words = [
        new QA('Always', ["завжди", "вічно", "за всіх обставин", "постійно"]),
        new QA('Cat', ["кіт", "кішка", "мурлика"]),
        new QA('Car', ["машина", "автомобіль", "вагон", "вагонетка", "віз"]),
        new QA('Flower', ["квітка", "цвіт", "квіт", "цвітіння"]),
        new QA('Sun', ["сонце", "день", "рік", "світило"]),
        new QA('House', ["будинок", "дім", "хата", "житло"]),
        new QA('Dog', ["собака", "пес", "дог"]),
        new QA('Cup', ["чаша", "чашка", "чашечка", "кубок", "келих"]),
        new QA('Tree', ["дерево"]),
        new QA('Moon', ["луна"]),
    ];
    shuffle(words);
    front_word.innerHTML = words[i].word;
    back_word.innerHTML = words[i].word;
    translate_word.innerHTML = words[i].translates;
    $('#next').click(()=>
    {   
        if(i == 9 || i > 9)
            $('#next').prop('disabled', true);
        else {
            if(flip_flag)
            {
                $('.card__inner').toggleClass('is-flipped');
                flip_flag = !flip_flag;
            }
            $('#prev').prop('disabled', false);
            i++;
            front_word.innerHTML = words[i].word;
            setTimeout(() => {back_word.innerHTML = words[i].word;
                translate_word.innerHTML = words[i].translates}, 500); 
        }
        switch_.innerHTML = (i + 1)  + "/10";
        
    })
    $('#prev').click(()=> { 
        if(i == 0 || i < 0)
        {
            i = 0;
            $('#prev').prop('disabled',true);
        }
            else{
                if(flip_flag)
                {
                    $('.card__inner').toggleClass('is-flipped');
                    flip_flag = !flip_flag;
                }
                $('#next').prop('disabled', false);
                i--;
                front_word.innerHTML = words[i].word;  
                setTimeout(() => {back_word.innerHTML = words[i].word;
                translate_word.innerHTML = words[i].translates}, 500);      
            }
        switch_.innerHTML = (i + 1) + "/10";
    });
    
    
    $('#btn').click(function(){
        flip_flag = !flip_flag;
        let input = String(document.getElementById('input').value).toLocaleLowerCase();
        if(flip_flag)
        {
        if(words[i].translates.includes(input)){
            correct++;
            correct_.innerHTML = "Correct: " + correct;
        }     
        else{
            wrong++;
            wrong_.innerHTML = "Wrong: " + wrong;
        }
        if((correct + wrong) == all)
        {
            let sum = correct + wrong;
            alert("Correct answers: " + ((correct / all) * 100) + "% Wrong answers: " + ((wrong) / all) * 100 + "%");
            correct = 0;
            wrong = 0;
            correct_.innerHTML = "Correct: " + correct;
            wrong_.innerHTML = "Wrong: " + wrong;
        }
    }
    });
    $('.card__inner').click(function(){
        $(this).toggleClass('is-flipped');
    })
})
  