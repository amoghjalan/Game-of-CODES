let handle = "";
let url = "Profile.html?handle=";
let button = document.querySelector("#handle_button");
let button1 = document.querySelector("#handle");
button1.value = "";
button1.focus();
button.addEventListener("click", function(e) {
  button1.val = "";
  handle = document.querySelector("#handle").value;
  url = url + handle;
  console.log(handle);
  if (!handle) {
    alert("Please enter User handle");
  } else {
    document.location.href = urlPro;
    url = "Profile.html?handle=";
  }

  e.preventDefault();
});
