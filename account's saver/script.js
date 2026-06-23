const userInput = document.getElementById("user-input");
const passInput = document.getElementById("pass-input");
const saveBtn = document.getElementById("save-btn");
const passesContainer = document.getElementById("passes-container");

let accounts = JSON.parse(localStorage.getItem("myAccounts")) || [];

function displayAccounts() {
  passesContainer.innerHTML = "";
  accounts.forEach(function (account, index) {
    const accountCard = document.createElement("div");
    accountCard.className = "account-card";

    accountCard.innerHTML = `
    <div class="account-info">
    <div id="user"><span>User: </span>${account.user}</div>
    <div><span>Password: </span>${account.pass}</div>
    </div>
    <button class="delete-btn" onclick = "deleteAccount(${index})">Delete</button>
    `;
    passesContainer.appendChild(accountCard);
  });
}

displayAccounts();

// SAVE BUTTON

saveBtn.addEventListener("click", function () {
  const username = userInput.value;
  const password = passInput.value;

  if (username === "" || password === "") {
    return;
  }

  const newAccount = {
    user: username,
    pass: password,
  };
  accounts.push(newAccount);

  localStorage.setItem("myAccounts", JSON.stringify(accounts));

  displayAccounts();
  userInput.value = "";
  passInput.value = "";
});

function deleteAccount(index) {
  accounts.splice(index, 1);
  localStorage.setItem("myAccounts", JSON.stringify(accounts));
  displayAccounts();
}
