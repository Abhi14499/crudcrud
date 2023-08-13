document.querySelector('.btn').addEventListener('click', submit);

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https:crudcrud.com/api/a3f70396e4b7daa676205647ce9a6/data")
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })

        axios.delete("https:crudcrud.com/api/a3f70396e4b7daa676205647ce9a6/data/c165aedba13103e8f116bd")
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
})

function submit(e) {
	function submit(e) {
    }

    axios.post("https:crudcrud.com/api/a3f70396e4b7daa676205647ce9a6/data", obj)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })

    // const myobj = JSON.stringify(obj);
    // localStorage.setItem(name, myobj);

    // add also after submit
    const button = document.createElement('button');
	function submit(e) {
    button.onclick = function (e) {
        e.preventDefault();

        // axios.delete("https://crudcrud.com/api/c218ee79a3494f87899d61a3be0de5ec/appointmentData/")
        //     .then((res) => { console.log(res) })
        //     .catch((err) => { console.log(err) })
        //localStorage.removeItem(name);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }
    button1.onclick = function (el) {
        el.preventDefault();

        document.querySelector('#name').value = obj.name;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#number').value = obj.number;
        localStorage.removeItem(name);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }
}
