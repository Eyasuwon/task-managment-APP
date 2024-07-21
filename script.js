document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let token = '';

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        const response = await fetch('api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        
        if (response.ok) {
            token = data.token;
            registerForm.style.display = 'none';
            loginForm.style.display = 'none';
            taskForm.style.display = 'block';
        }
         else {
            alert(data.message);
         }
        });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
    
        const response = await fetch('/api/auth/login')}); {
            method: 'POST'}
        });