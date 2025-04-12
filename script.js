console.log("lets start real programming man")

const questions = [
    "What is the time complexity of binary search in a sorted array?",
    "Which keyword is used to define a class in Python?",
    "Which data structure uses FIFO (First In First Out) principle?",
    "What will typeof null return in JavaScript?",
    "Which sorting algorithm has the best average-case performance?",
    "What does SQL stand for?",
    `What is the output of console.log(2 + "2") in JavaScript?`,
    "Which keyword is used to inherit a class in Java?",
    "Which function is used to convert a string to an integer in Python?",
    "Which HTML tag is used to link an external JavaScript file?"
]

const options = [
    ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    ["def", "class", "object", "struct"],
    ["Stack", "Queue", "Tree", "Heap"],
    ["object", "null", "undefined", "number"],
    ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    ["Sequential Query Logic", "Structured Query Language", "Server Query Language", "Standard Query Language"],
    ["4", "'22'", "NaN", "Error"],
    ["this", "extends", "inherit", "implements"],
    ["int()", "str()", "float()", "parseInt()"],
    ["<script src=\"...\">", "<js href=\"...\">", "<link rel=\"js\">", "<style src=\"...\">"]
];

let correct_answes = [
    "Rijan Dhakal",
    "O(log n",
    "class",
    "Queue",
    "object",
    "Merge Sort",
    "Structured Query Language",
    "'22'",
    "extends",
    "int()",
    `<script src=\"...\">`
]

let user_answer = []
let on_off = false


document.body.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
        document.body.querySelectorAll(".option").forEach((option) => {
            option.style.backgroundColor = "white"
            option.classList.remove("clicked")
            on_off = false
        })
        option.style.backgroundColor = "#A259FF"
        option.classList.add("clicked")
        on_off = true
    })
})

let c = 0;
let count = 0;

let next_button = document.body.querySelector(".next")
next_button.addEventListener(("click"), () => {
    if (on_off == true) {
        document.body.querySelectorAll(".option").forEach((option) => {
            option.style.backgroundColor = "white"
            if (option.classList.contains("clicked")) {
                user_answer.push(option.textContent)
            }
        })
        if (c < questions.length) {
            document.body.querySelector(".question").textContent = `${questions[c]}`
            let option_list = options[c]
            document.body.querySelector(".one").textContent = option_list[0]
            document.body.querySelector(".two").textContent = option_list[1]
            document.body.querySelector(".three").textContent = option_list[2]
            document.body.querySelector(".four").textContent = option_list[3]
            c++
        }
        else {
            next_button.textContent = "Finished"
            next_button.style.backgroundColor = "red"
            for (let i = 0; i < correct_answes.length; i++) {
                if (correct_answes[i] == user_answer[i]) {
                    count++
                }
            }
            alert(`your score is : ${count}`)
        }
        on_off = false
    }
    else {
        alert("please select atleast one before going to next qns")
    }
})

