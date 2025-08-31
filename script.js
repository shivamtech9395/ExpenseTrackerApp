
/* script.js 
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');
const filterCategory = document.getElementById('filter-category');
const expenseChart = document.getElementById('expense-chart').getContext('2d');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

let chart = new Chart(expenseChart, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Expenses by Category',
            data: [],
            backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#F44336']
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateChart() {
    const categories = ['Food', 'Travel', 'Shopping', 'Other'];
    const data = categories.map(cat => 
        expenses.filter(exp => exp.category === cat).reduce((sum, exp) => sum + exp.amount, 0)
    );
    chart.data.labels = categories;
    chart.data.datasets[0].data = data;
    chart.update();
}

function renderExpenses(filter = 'All') {
    expenseList.innerHTML = '';
    const filteredExpenses = filter === 'All' ? expenses : expenses.filter(exp => exp.category === filter);
    
    filteredExpenses.forEach((exp, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `${exp.name} - ${exp.category}: ₹${exp.amount} <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(li);
    });
    
    totalAmount.textContent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    updateChart();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses(filterCategory.value);
}

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;
    
    if (!name || amount <= 0) {
        alert('Please enter valid name and amount.');
        return;
    }
    
    const expense = { name, amount, category };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    
    renderExpenses(filterCategory.value);
    expenseForm.reset();
});

filterCategory.addEventListener('change', () => {
    renderExpenses(filterCategory.value);
});

renderExpenses(); */