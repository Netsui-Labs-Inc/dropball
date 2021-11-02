
document.addEventListener('DOMContentLoaded', () => {
    window.livewire.on('cashInCallbackRequest', data => {
        if (document.querySelector('.btn-cash-in-id-' + data.id)) {
            document.querySelector('.btn-cash-in-id-' + data.id).click();
            console.log(data.id);
        }
    });
});

