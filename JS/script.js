// Modal handling
function openModal(action) {
    const modal = new bootstrap.Modal(document.getElementById('actionModal'));
    const modalTitle = document.querySelector('.modal-title');
    
    switch(action) {
        case 'add':
            modalTitle.textContent = 'Add Employee';
            break;
        case 'update':
            modalTitle.textContent = 'Update Benefits';
            break;
        case 'report':
            modalTitle.textContent = 'Generate Report';
            break;
        case 'view':
            modalTitle.textContent = 'View Plan Details';
            break;
        case 'enroll':
            modalTitle.textContent = 'Enroll in New Plan';
            break;
    }
    
    modal.show();
}