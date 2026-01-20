// UI Interactions and Modal Management Code

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    // Function to open modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners for buttons
    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
