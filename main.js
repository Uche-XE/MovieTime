
const list = document.querySelector(`ul`);
    const form = document.getElementById(`add-movie`);
    const input = document.querySelector(`input`);

   
    const movieName = document.createElement(`span`);
    

   form.addEventListener(`submit`, (e)=>{
e.preventDefault()
const li = document.createElement(`li`);
li.innerText = input.value
const deleteBtn = document.createElement(`span`);
    deleteBtn.textContent = `delete`;
    deleteBtn.classList.add(`delete`);
li.append(deleteBtn)
list.append(li)
console.log(`form`);
   }) 


//delete movie
list.addEventListener(`click`,(e)=>{

    if (e.target.className == `delete`){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    }
});


movieName.classList.add(`name`);


movieName.classList.add(`name`);


