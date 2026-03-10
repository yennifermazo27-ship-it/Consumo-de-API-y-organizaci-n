const loadBtn = document.getElementById("loadBtn");
const usersContainer = document.getElementById("usersContainer");
const errorMsg = document.getElementById("errorMsg");

export function addEvents(callback) {

    loadBtn.addEventListener("click", async () => {

        errorMsg.textContent = "";
        usersContainer.innerHTML = "";

        try {

            const users = await callback();

            users.forEach((user) => {

                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Altura:</strong> ${user.height} cm</p>
                    <p><strong>Peso:</strong> ${user.mass} kg</p>
                    <p><strong>Género:</strong> ${user.gender}</p>
                `;

                usersContainer.appendChild(card);

            });

        } catch (error) {

            errorMsg.textContent = error.message;

        }

    });

}