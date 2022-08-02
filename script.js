// Getting the Reference of Button to add notes 


const addButton = document.getElementById('add');

// creating function for updated notes to see final result 


const updateLsData = () =>{

    const textAreaData = document.querySelectorAll('.textarea');
    const notes = [];

    console.log(textAreaData)

    textAreaData.forEach((note)=>{
      return notes.push(note.value);
    });

    console.log(notes)

    localStorage.setItem('notes', JSON.stringify(notes))
}


// creating function for adding notes 

const addNewNotes =(text ='')=>{

const note = document.createElement('div');
note.classList.add('note');




// Adding dynamic data to HTML using JavaScript

const htmlData =`
<div class="tools">
            <button id="edit" class="edit">
                <i class="fa-solid fa-edit"></i>
            </button>
            <button id="delete" class="delete">
                <i class="fa-solid fa-trash-alt"></i>
            </button>
        </div>

       
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="textarea ${text ? "hidden" : ""}"></textarea> `;


note.insertAdjacentHTML('afterbegin',htmlData);

// getting Reference 

const editButton = note.querySelector('.edit');
const  delButton = note.querySelector('.delete');

const  mainDiv = note.querySelector('.main');
const textArea = note.querySelector('.textarea');




// toggle usng edit the Note 

textArea.value =text;
mainDiv.innerHTML =text;

editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});


// targeting the final conetnt inside note div 

textArea.addEventListener('change',(event)=>{
const value = event.target.value

mainDiv.innerHTML = value;

updateLsData();

});


// deleting the Note 

delButton.addEventListener('click',()=>{
    note.remove();

    updateLsData();
});


document.body.appendChild(note);

}


// getting back data from local storage 


const notes =JSON.parse(localStorage.getItem('notes'));

if(notes)
{
    notes.forEach((note)=>{
addNewNotes(note);
    })
}

addButton.addEventListener('click',()=>{
addNewNotes()});





// ============================================================== end ====================================== //