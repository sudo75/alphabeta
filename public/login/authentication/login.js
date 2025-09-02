class Login {
    constructor() {
        this.elements = {
            meta: document.querySelector('#auth_menu_login'),
            login: document.querySelector('#login'),
            username: document.querySelector('#login_username'),
            password: document.querySelector('#login_password')
        }

        // function is called by the html element -> createAccount is no longer bound to 'this'
        this.elements.login.addEventListener('click', this.login.bind(this)); 
    }

    getCredentials() {
        const username = this.elements.username.value;
        const password = this.elements.password.value;

        return {username: username, password: password};
    }

    showMessage(message) {
        // clear meta
        this.elements.meta.innerHTML = '';

        // Add message
        const ele_message = document.createElement('p');
        ele_message.innerText = message;
        ele_message.classList.add('message');

        this.elements.meta.append(ele_message);
    }

    async login() {

        const { username, password } = this.getCredentials();
        
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}, details: ${data.message}`);
            }

            this.showMessage(data.message);


        } catch (err) {
            console.error(err);
        }


    }
}

export default Login;