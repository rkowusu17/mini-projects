const searchInputEl = document.getElementById("searchInput");
const searchBtn = document.getElementById("serachBtn");
const resultCont = document.getElementById("resultCont");
const wordDesc = document.getElementById("wordDescription");
const wordTitle = document.getElementById("wordTitle");
const audioCont = document.getElementById("audioContainer");
const audioBtn = document.getElementById("audioButton");
const phonics = document.getElementById("wordPhonics");

searchBtn.addEventListener("click", search);
searchInputEl.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  const searchItem = searchInputEl.value.trim();
  if (searchItem === " ") {
    alert("Please enter a word");
    return;
  }
  fetchDictionaryData(searchItem);
}

async function fetchDictionaryData(searchItem) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem} `
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the data");
    }

    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.log(error);
    alert("An error occured");
  }
}

function displayResults(data) {
  resultCont.style.display = "block";
  const wordData = data[0];

  wordTitle.textContent = wordData.word;
  // phonics.textContent = wordData.text;

  wordDesc.innerHTML = ` <ul> 
      ${wordData.meanings
        .map(
          (meaning) =>
            ` <li>
            <p>
              <strong>Part Of Speech: </strong> ${meaning.partOfSpeech}
            </p>
            <p>
              <strong> Definition: </strong> ${meaning.definitions[0].definition}
            </p>
          </li>`
        )
        .join("\n")}
         
     
    </ul>`;
}

audioBtn.addEventListener("click", () => {
  const searchTerm = searchInputEl.value.trim();

  if (searchTerm === " ") {
    alert("Please enter a word");
    return;
  }
  speak(searchTerm);
});

function speak(word) {
  const speech = new SpeechSynthesisUtterance(word);
  speech.lang = "en-US";
  speech.volume = 3;
  speech.rate = 0.6;
  speech.pitch = 2;
  window.speechSynthesis.speak(speech);
}
