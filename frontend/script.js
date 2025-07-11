document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("faqForm");
    const queryInput = document.getElementById("queryInput");
    const loader = document.getElementById("loader");
    const responseBox = document.getElementById("responseBox");
    const errorBox = document.getElementById("errorBox");

    //const categorySpan = document.getElementById("category");
    const questionSpan = document.getElementById("question");
    const answerSpan = document.getElementById("answer");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // stop page reload
        const query = queryInput.value.trim();

        // Clear previous results
        responseBox.classList.add("hidden");
        errorBox.classList.add("hidden");

        if (query === "") {
            errorBox.textContent = "⚠️ Please enter a symptom or question.";
            errorBox.classList.remove("hidden");
            return;
        }

        loader.classList.remove("hidden");

        try {
            const res = await fetch("http://localhost:5000/faq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ query }),
            });

            const text = await res.text(); // because Flask returns HTML
            loader.classList.add("hidden");

            // Use DOMParser to parse returned HTML
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(text, "text/html");

            const foundCategory = htmlDoc.querySelector("h3");
            const foundQuestion = htmlDoc.querySelectorAll("p")[0];
            const foundAnswer = htmlDoc.querySelectorAll("p")[1];

            if (!foundCategory || !foundQuestion || !foundAnswer) {
                throw new Error("No matching answer");
            }

            //categorySpan.textContent = foundCategory.textContent.replace("Category: ", "");
            questionSpan.textContent = foundQuestion.textContent.replace("Question: ", "");
            answerSpan.textContent = foundAnswer.textContent.replace("Answer: ", "");

            responseBox.classList.remove("hidden");
        } catch (err) {
            loader.classList.add("hidden");
            errorBox.textContent = "⚠️ No matching answer found. Try a different query.";
            errorBox.classList.remove("hidden");
        }
    });
});
