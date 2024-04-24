const follow = document.getElementById("follow");
const message = document.getElementById("message");

follow.addEventListener("click", () => {
  follow.classList.toggle("active");
  follow.textContent = follow.classList.contains("active")
    ? "Following"
    : "Follow";
});

follow.addEventListener("mouseover", () => {
  follow.textContent = follow.classList.contains("active")
    ? "Unfollow"
    : "Follow";
});

follow.addEventListener("mouseout", () => {
  follow.textContent = follow.classList.contains("active")
    ? "Following"
    : "Follow";
});

message.addEventListener("click", () => {
  message.classList.toggle("active");
  message.textContent = message.classList.contains("active")
    ? "Message Sent"
    : "Message";

  message.disabled = message.classList.contains("active");
});
