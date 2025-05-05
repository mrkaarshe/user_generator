let api = "https://randomuser.me/api/";

const btn = document.querySelector('button');
const img = document.querySelector('img');
const nameField = document.querySelector('.name');
const emailField = document.querySelector('.email');
btn.addEventListener('click', getRandomUser);
function getRandomUser() 
{
    axios.get(api)
        .then(response => {
            const data = response.data.results[0];
            img.src = data.picture.large;
            nameField.textContent = `${data.name.title } : ${data.name.first} ${data.name.last}`;
            emailField.textContent = data.email;
        })
        .catch(error => {
            console.error("Error fetching user:", error);
        });
}
getRandomUser();




