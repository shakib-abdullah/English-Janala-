



const loadlesson = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
        fetch(url)
            .then(res => res.json())
            .then(x => {
                displaylesson(x.data);
            });
}

const loadlevelword = (id) =>{
    //console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    //console.log(url);
    fetch(url)
     .then(res=>res.json())
     .then(data=>displaylevelword(data.data));
}

const displaylevelword=(words)=>{
    //console.log(words);
    const wordcontainer = document.getElementById("word-container");
    wordcontainer.innerHTML = "";

    words.forEach(word =>{
        console.log(word);

        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white m-[20px]   py-[30px] shadow-sm py-[10px] px-[5px] space-y-4 text-center rounded-lg">
            <h2 class=" font-bold text-2xl">${word.word}</h2>
            <p>Meaning /Pronounciation</p>
            <div class="font-semibold">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between text-center mx-[30px] ">
                <button  class="bg-[#1A91FF30] hover:bg-[#1A91FF90] h-[30px] w-[30px] rounded-sm"><i class="fa-solid fa-circle-info"></i></button>
                <button  class="bg-[#1A91FF30]  hover:bg-[#1A91FF90] h-[30px] w-[30px] rounded-sm"><i class="fa-solid fa-volume-high"></i></button>

            </div>
        </div>
        `;

        wordcontainer.appendChild(card); 

    })


}


 const displaylesson = (lessons) => {
     //! 1. get the container and empty it 
     const lessoncontainer = document.getElementById("lesson-container");
     lessoncontainer.innerHTML = "";

     //! 2.create element 
    lessons.forEach(element => {
        //console.log(element.level_no);
        const lesson = document.createElement("div");
         lesson.innerHTML = `<button onclick="loadlevelword(${element.level_no})" class="btn btn-outline btn-primary w-[150px]"><i class="fa-solid fa-book-open"></i>Learn-${element.level_no}</button>`


         //! 3. append child : 
         lessoncontainer.appendChild(lesson);

  });
}


loadlesson();   