function ajoutTache() {
    const tacheInput = document.getElementById('tache');
    const tacheValue = tacheInput.value.trim();

    if (tacheValue) {
        const li = document.createElement('li');
        li.classList.add('tache-item');

        const stopIcon = document.createElement('ion-icon');
        stopIcon.setAttribute('name', 'stop-outline');

        const taskText = document.createElement('span');
        taskText.textContent = tacheValue;

        li.appendChild(stopIcon);
        li.appendChild(taskText);

        document.getElementById('liste').appendChild(li);

        // Ajouter un événement de clic à l'élément de liste
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
            if (this.classList.contains('completed')) {
                stopIcon.setAttribute('name', 'checkmark-outline');
                document.getElementById('liste-complete').appendChild(this);
            } else {
                stopIcon.setAttribute('name', 'stop-outline');
                document.getElementById('liste').appendChild(this);
            }
        });

        tacheInput.value = '';
    } else {
        alert("Ajoutez une tâche d'abord");
    }
}

document.getElementById('icon').addEventListener('click', ajoutTache);
