const Btn = document.getElementById("Btn");
Btn.addEventListener("click", () => {
    const input = document.getElementById("inputText");
    const inputValue = input.value.trim();

    if (inputValue === "") {
        alert("Enter The text !...")
        return;
    }

    const order = document.getElementById("order");
    const list = document.createElement("li");
    list.innerHTML = `${inputValue}   <button id="dlt" class="delete-btn">Delete❌<button>`;

    order.append(list);

    const dltBtn = list.querySelector("button");

    dltBtn.addEventListener("click", () => {
        list.remove();
    })

    input.value = "";


    const clrBtn = document.getElementById("clear");
    clrBtn.addEventListener("click", () => {
        order.remove();
    })




})