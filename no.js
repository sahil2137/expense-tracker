// script.js 
// Get form, expense list, and total amount elements 

// no.js
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmountElement = document.getElementById("total-amount");
const budgetLimitInput = document.getElementById("budget-limit");
const budgetStatus = document.getElementById("budget-status");
const setBudgetBtn = document.getElementById("set-budget-btn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let budgetLimit = parseFloat(localStorage.getItem("budgetLimit")) || 0;

function renderExpenses() {
	expenseList.innerHTML = "";

	let totalAmount = 0;

	for (let i = 0; i < expenses.length; i++) {
		const expense = expenses[i];
		const expenseRow = document.createElement("tr");
		expenseRow.innerHTML = `
		<td>${expense.name}</td> 
		<td>$${expense.amount}</td> 
		<td class="delete-btn" data-id="${i}">Delete</td> 
		`;
		expenseList.appendChild(expenseRow);

		totalAmount += expense.amount;
	}

	totalAmountElement.textContent = totalAmount.toFixed(2);

	
	const remainingBudget = budgetLimit - totalAmount;
	if (budgetLimit === 0) {
		budgetStatus.textContent = "Set your budget limit";
	} else if (remainingBudget >= 0) {
		budgetStatus.textContent = Remaining Budget: $${remainingBudget.toFixed(2)};
		budgetStatus.style.color = "green";
	} else {
		budgetStatus.textContent = Exceeded Budget: $${Math.abs(remainingBudget).toFixed(2)};
		budgetStatus.style.color = "red";
	}


	localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense(event) {
	event.preventDefault();

	const expenseNameInput = document.getElementById("expense-name");
	const expenseAmountInput = document.getElementById("expense-amount");
	const expenseName = expenseNameInput.value;
	const expenseAmount = parseFloat(expenseAmountInput.value);

	expenseNameInput.value = "";
	expenseAmountInput.value = "";

	if (expenseName === "" || isNaN(expenseAmount)) {
		alert("Please enter valid expense details.");
		return;
	}

	const expense = {
		name: expenseName,
		amount: expenseAmount,
	};

	expenses.push(expense);

	renderExpenses();
}

function deleteExpense(event) {
	if (event.target.classList.contains("delete-btn")) {

		const expenseIndex =
			parseInt(event.target.getAttribute("data-id"));

		expenses.splice(expenseIndex, 1);

		renderExpenses();
	}
}

function setBudget() {
	const newBudgetLimit = parseFloat(budgetLimitInput.value);
	if (!isNaN(newBudgetLimit)) {
		budgetLimit = newBudgetLimit;
		localStorage.setItem("budgetLimit", budgetLimit);
		renderExpenses();
	} else {
		alert("Please enter a valid budget limit.");
	}
}

expenseForm.addEventListener("submit", addExpense);
expenseList.addEventListener("click", deleteExpense);
setBudgetBtn.addEventListener("click", setBudget);

renderExpenses();


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const colors = [
    '#FF0000', // Red
    '#FF4500', // OrangeRed
    '#FFA500', // Orange
    '#FFFF00', // Yellow
    '#32CD32', // LimeGreen
    '#008000', // Green
    '#00FFFF', // Cyan
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF69B4', // HotPink
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#8B4513', // SaddleBrown
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#800000', // Maroon
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#4B0082', // Indigo
    '#800080', // Purple
    '#9400D3', // DarkViolet
    '#8B008B', // DarkMagenta
    '#FF00FF', // Fuchsia
    '#EE82EE', // Violet
    '#8B0000', // DarkRed
    '#FF6347', // Tomato
    '#FA8072', // Salmon
    '#CD5C5C', // IndianRed
    '#8B0000', // DarkRed
    '#FF7F50', // Coral
    '#DC143C', // Crimson
    '#FF4500', // OrangeRed
    '#FFD700', // Gold
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFA07A', // LightSalmon
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#FF6347', // Tomato
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#8B4513', // SaddleBrown
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
    '#32CD32', // LimeGreen
    '#228B22', // ForestGreen
    '#556B2F', // DarkOliveGreen
    '#ADFF2F', // GreenYellow
    '#9ACD32', // YellowGreen
    '#FFFF00', // Yellow
    '#FFD700', // Gold
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#CD5C5C', // IndianRed
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#800080', // Purple
    '#4B0082', // Indigo
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4169E1', // RoyalBlue
    '#0000FF', // Blue
    '#32CD32', // LimeGreen
    '#FF6347', // Tomato
    '#FF69B4', // HotPink
    '#FF4500', // OrangeRed
    '#FF8C00', // DarkOrange
    '#FFD700', // Gold
    '#00FF00', // Lime
    '#00FFFF', // Aqua
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#FF00FF', // Magenta
    '#FF1493', // DeepPink
    '#A52A2A', // Brown
    '#800000', // Maroon
    '#DAA520', // Goldenrod
    '#B8860B', // DarkGoldenrod
    '#808000', // Olive
    '#8B4513', // SaddleBrown
    '#556B2F', // DarkOliveGreen
    '#2E8B57', // SeaGreen
    '#008B8B', // DarkCyan
    '#4682B4', // SteelBlue
    '#6A5ACD', // SlateBlue
    '#483D8B', // DarkSlateBlue
];


function changeBackgroundColor() {
    const body = document.querySelector('body');
    let currentIndex = 0;

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % colors.length;

        const currentColor = colors[currentIndex];
        const nextColor = colors[nextIndex];

        body.style.transition = 'background-color 4s ease';
        body.style.backgroundColor = nextColor;

        
        currentIndex = nextIndex;
    }, 1000); 
}

changeBackgroundColor();
