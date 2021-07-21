const SwalModal = (icon, title, html) => {
    Swal.fire({
        icon,
        title,
        html
    })
}

const SwalConfirm = (icon, title, html, confirmButtonText, method, params, callback) => {
    Swal.fire({
        icon,
        title,
        html,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText,
        reverseButtons: true,
    }).then(result => {
        if (result.value) {
            return window.livewire.emit(method, params)
        }

        if (callback) {
            return window.livewire.emit(callback)
        }
    })
}

const SwalAlert = (icon, title, timeout = 7000) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: timeout,
        onOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon,
        title
    })
}

document.addEventListener('DOMContentLoaded', () => {
    window.livewire.on('swal:modal', data => {
        SwalModal(data.icon, data.title, data.text)
    })

    window.livewire.on('swal:confirm', data => {
        SwalConfirm(data.icon, data.title, data.text, data.confirmText, data.method, data.params, data.callback)
    })

    window.livewire.on('swal:alert', data => {
        SwalAlert(data.icon, data.title, data.timeout)
    })

    window.livewire.on('place-bets-puti', data => {
        const element = document.querySelector('.puti-pool');
        element.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');
    })

    window.livewire.on('place-bets-pula', data => {
        const element = document.querySelector('.pula-pool');
        element.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');
    })
})
