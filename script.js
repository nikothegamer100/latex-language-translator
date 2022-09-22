const letters = {
    "σ": "a",
    "£": "b",
    "Ǝ": "c",
    "₳": "d",
    "ε": "e",
    "┘": "f",
    "Γ": "g",
    "μ": "h",
    "∩": "i",
    "ſ": "j",
    "≡": "k",
    "Œ": "l",
    "ß": "m",
    "þ": "n",
    "⌐": "o",
    "Æ": "p",
    "¶": "q",
    "Ω": "r",
    "Φ": "s",
    "┼": "t",
    "↨": "u",
    "‡": "v",
    "w": "w",
    "idk": "x",
    "√":"z"
    
}
function translate() {
    const text = document.getElementById("text").value

    
    var translated = ""
    document.getElementById("results").innerText = ""
    for (var i = 0; i < text.length; i++) {
        translated + letters[text.charAt(i)]
        if(letters[text.charAt(i)] == undefined) {
            document.getElementById("results").innerText = document.getElementById("results").innerText + ""
            
        } else {
            document.getElementById("results").innerText = document.getElementById("results").innerText + letters[text.charAt(i)]
        }
        console.log(letters[text.charAt(i)])
      }
      
}
