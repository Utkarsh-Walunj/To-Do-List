// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

// alert("You can make your To-Do list here !!");

addtolist.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    let timec = time.value
    let datec = date.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc, timec, datec]))
    console.log(e)
    todo.innerHTML = `
    <h1 style="font-family: lato;"> ${titlec} </h1>
    <p> <h5 style="font-family: lato;"> ${descc} </h5> </p>
    <p style="font-family: lato;"> <b> <i> ${datec}, ${timec} </i> </b></p>
    `
    title.value = ""
    desc.value = ""
    time.value = ""
    date.value = ""
})


doneBtn.addEventListener("click", (e) => {
    localStorage.removeItem("todo")
    todo.innerHTML = ""
    alert("Congradulations you have done your work !!");

})

deleteBtn.addEventListener("click", (e) => {
    localStorage.removeItem("todo")
    todo.innerHTML = ""
    alert("Your list will be deleted !!");

})

notBtn.addEventListener("click", (e) => {
    localStorage.removeItem("todo")
    todo.innerHTML = ""
    alert("Ooops looks like you are not so concerned about your work !!");

})