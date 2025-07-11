// autocomplete.js

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("queryInput");
  const suggestionBox = document.createElement("div");
  suggestionBox.classList.add("autocomplete-suggestions");
  input.parentNode.appendChild(suggestionBox);

 const suggestions = [
  "I have a sore throat and mild fever. What could be wrong?",
  "I'm feeling very tired and dizzy all the time.",
  "I’ve been coughing for more than a week. What should I do?",
  "I have a headache that won’t go away.",
  "My chest feels tight and I’m short of breath.",
  "I'm feeling low and unmotivated lately. Could it be depression?",
  "I’ve had diarrhea since morning. What should I do?",
  "Why do I get frequent nosebleeds?",
  "My joints hurt when I wake up. What could be the cause?",
  "I'm coughing and have chest pain. Should I be worried?",
  "I get anxious in public places. Is that normal?",
  "I feel breathless when climbing stairs.",
  "My stomach hurts after eating spicy food.",
  "I feel bloated all the time. What’s wrong?",
  "I’m always thirsty and urinating a lot. Could it be diabetes?",
  "I hear a ringing sound in my ears.",
  "I feel pain while urinating.",
  "My period is irregular and painful.",
  "I have red, itchy bumps on my skin.",
  "I have a fever and body aches. Could it be flu?",
  "Why do I feel tired even after sleeping well?",
  "My child has a fever and is not eating well.",
  "I’m having trouble concentrating and feel anxious.",
  "I feel pain in my lower back every day.",
  "My vision is blurry sometimes. What does it mean?",
  "Why do I feel hungry all the time?",
  "I feel nervous before every small task. Is that anxiety?",
  "My periods suddenly stopped. Should I worry?",
  "I feel lightheaded when I stand up quickly.",
  "What should I do if I get a burn?",
  "My hands shake sometimes. Why?",
  "I feel like I’m not good enough and avoid social events.",
  "I feel pain in my chest when I’m stressed.",
  "I lost my appetite completely. What does it mean?",
  "My ears feel blocked and I can't hear well.",
  "My knee hurts when I walk or climb stairs.",
  "I feel like I can’t breathe deeply sometimes.",
  "I cry often and feel hopeless.",
  "My stomach burns after meals.",
  "I see black spots or floaters in my vision.",
  "I can't stop picking at my skin or nails.",
  "I get panic attacks where I feel I can’t breathe.",
  "My elderly parent forgets names and repeats things.",
  "I feel chest pain after running or climbing stairs.",
  "I feel weak and pale — could it be anemia?",
  "I get constipated regularly. What can help?",
  "I think I might be pregnant. What signs should I look for?",
  "My child keeps coughing at night. What can I do?",
  "I feel burning when I urinate.",
  "I feel tingling in my fingers and toes.",
  "My mood swings quickly between happy and sad."
  ];

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (!query) return;

    const filtered = sampleSuggestions.filter(s => s.toLowerCase().includes(query));

    filtered.forEach(s => {
      const div = document.createElement("div");
      div.textContent = s;
      div.addEventListener("click", () => {
        input.value = s;
        suggestionBox.innerHTML = "";
      });
      suggestionBox.appendChild(div);
    });
  });

  document.addEventListener("click", (e) => {
    if (!suggestionBox.contains(e.target) && e.target !== input) {
      suggestionBox.innerHTML = "";
    }
  });
});
