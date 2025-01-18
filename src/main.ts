console.log("Typescript collegato");

document.querySelectorAll<HTMLButtonElement>('.skillDescription-btn').forEach(button => {
    button.addEventListener('click', (event: MouseEvent) => {
        // Trova l'elemento che questo pulsante controlla
        const targetSelector = button.getAttribute('data-bs-target');
        const isExpanded = button.getAttribute('aria-expanded');
        if (!targetSelector) return;
        console.log(isExpanded);

        const collapseElement = document.querySelector(targetSelector) as HTMLElement;
        
        // // Verifica se l'elemento è già aperto
        if (isExpanded) {
            collapseElement.classList.add('show');
            button.classList.remove('collapsed');
        } else {
            collapseElement.classList.remove('show')
        }
    });
});
