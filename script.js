
console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page is fully loaded");
};

const eventName = "Music Night";
const eventDate = "2025-06-15";
let seatsAvailable = 50;
console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${seatsAvailable}`);

seatsAvailable--;
console.log(`Seats remaining: ${seatsAvailable}`);

const events = [
  { name: "Yoga Camp", date: "2025-07-01", seats: 0 },
  { name: "Tech Talk", date: "2025-06-20", seats: 10 },
  { name: "Food Fest", date: "2024-05-10", seats: 30 },
];

function displayValidEvents(eventList) {
  const today = new Date();
  eventList.forEach(ev => {
    const evDate = new Date(ev.date);
    if (evDate > today && ev.seats > 0) {
      console.log(`${ev.name} on ${ev.date} - Seats: ${ev.seats}`);
    }
  });
}

try {
  displayValidEvents(events);
} catch (err) {
  console.error("Error displaying events", err);
}

// Exercise 4: Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, category) {
  events.push({ name, date, category, seats: 20 });
}

function registerUser(eventName) {
  const ev = events.find(e => e.name === eventName);
  if (ev && ev.seats > 0) ev.seats--;
}

function filterEventsByCategory(cat) {
  return events.filter(e => e.category === cat);
}

function categoryCounter(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${category} registrations: ${count}`);
  };
}

const musicCounter = categoryCounter("Music");
musicCounter();
musicCounter();

function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const eventObj = new Event("Community Meetup", "2025-08-01", 20);
console.log(Object.entries(eventObj));

const allEvents = ["Music Night", "Yoga Camp", "Tech Talk"];
allEvents.push("Art Workshop");
const musicEvents = allEvents.filter(e => e.includes("Music"));
const formatted = allEvents.map(e => `Event: ${e}`);

document.querySelectorAll(".eventCard").forEach(card => {
  card.style.border = "1px solid #ccc";
});

const newCard = document.createElement("div");
newCard.className = "eventCard";
newCard.innerText = "New Community Event";
document.body.appendChild(newCard);

document.querySelectorAll(".registerBtn").forEach(btn => {
  btn.onclick = () => alert("Registered!");
});

document.querySelector("#categoryFilter").onchange = function () {
  console.log("Filtered by category: " + this.value);
};

document.querySelector("#searchBox").addEventListener("keydown", e => {
  if (e.key === "Enter") console.log("Search: " + e.target.value);
});

function fetchEvents() {
  console.log("Loading...");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log("Events Loaded", data))
    .catch(err => console.error("Error", err));
}

async function fetchEventsAsync() {
  try {
    console.log("Loading...");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Events Loaded", data);
  } catch (err) {
    console.error("Fetch Failed", err);
  }
}

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

const sampleEvent = { name: "Webinar", date: "2025-09-10", seats: 30 };
const { name, date } = sampleEvent;
const cloneEvents = [...allEvents];

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.elements["name"].value;
  const email = e.target.elements["email"].value;
  if (!name || !email) {
    alert("Please fill in all fields.");
  } else {
    console.log(`Registered: ${name}, ${email}`);
  }
});

function postRegistration(data) {
  console.log("Sending data...");
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => console.log("Success", result))
      .catch(err => console.error("Failed", err));
  }, 2000);
}


console.log("Submitting form...");

$(document).ready(function () {
  $('#registerBtn').click(function () {
    alert('jQuery click handled');
  });
  $('.eventCard').fadeIn();
  setTimeout(() => $('.eventCard').fadeOut(), 2000);
});

