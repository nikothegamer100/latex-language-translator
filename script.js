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
const letters1 = {
    "a": "σ",
    "b": "£",
    "c": "Ǝ",
    "d": "₳",
    "e": "ε",
    "f": "┘",
    "g":  "Γ",
   "h": "μ",
   "i": "∩",
   "j": "ſ",
   "k": "≡",
    "l":"Œ",
   "m":"ß",
   "n": "þ",
   "o":"⌐",
   "p": "Æ",
    "q":"¶",
    "r": "Ω",
    "s":"Φ",
    "t": "┼",
    "u":"↨",
    "v": "‡",
    "w": "w",
    "x":"idk",
    "z":"√"
    
}
function translate() {
    const text = document.getElementById("text").value

    
    var translated = ""
    document.getElementById("results").innerText = ""
    for (var i = 0; i < text.length; i++) {
        translated + letters[text.charAt(i)]
        if(letters[text.charAt(i)] == undefined) {
            document.getElementById("results").innerText = document.getElementById("results").innerText + " "
            
        } else {
            document.getElementById("results").innerText = document.getElementById("results").innerText + letters[text.charAt(i)]
        }
        console.log(letters[text.charAt(i)])
      }
      
}

function texttolatexlanguage() {
    const text = document.getElementById("anotherthing").value
    document.getElementById("results1").innerText = ""
    for (var i = 0; i < text.length; i++) {
      
        if(letters1[text.charAt(i)] == undefined) {
            document.getElementById("results1").innerText = document.getElementById("results").innerText + " "
            
        } else {
            document.getElementById("results1").innerText = document.getElementById("results1").innerText + letters1[text.charAt(i)]
        }
        console.log(letters1[text.charAt(i)])
      }
}
