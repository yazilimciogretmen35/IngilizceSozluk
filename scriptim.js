const input=document.getElementById('word');
const buton=document.querySelector('.butonum');
const translatedDiv=document.getElementById("translatedDiv");
const title=document.getElementById('title');
const meaning=document.getElementById('meaning');
const audio=document.getElementById('audio');






async function fetchApi(){
    translatedDiv.style.display='none'; 
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    const result= await fetch(url).then ((res)=>res.json());
    console.log(result)
    if(result.title){ //title geliyorsa hata var demektir ona göre bir if yapısı kuralım
        translatedDiv.style.display='block'; 
        title.textContent=`What is "${input.value}"`
        
    }
    else{

    translatedDiv.style.display='block';  // yani eğer kelime varsa display none olan kısmı display block ile görünür hale getiriryoruz
    title.textContent=result[0].word; // resultun içindeki 0 ıncı indexteki wordu basacağız title'a;
    meaning.textContent=result[0].meanings[0].definitions[0].definition;
    audio.src=result[0].phonetics[0].audio;
}



}








buton.addEventListener('click',fetchApi)