$('.delete-card-item').click(function() {
    console.log($(this).data())
    const cardId = $(this).data('card-id')
    $('#delete-card-button').prop('href', `/delete_card/${cardId}`)
})

$('#create-card-button').click(function() {
    console.log('Click')
    const name = $('input[name="name"]').val()
    const description = $('input[name="description"]').val()
    const price = $('input[name="price"]').val()

    // TODO Cuando estos valores sean vacios,
    // Mostramos un mensaje de error y paramos el click
    // Tener deshabilitado, y habilitarlo solo cuando hayamos metido
    // todos los valores

    // Cuando se le de a crear una vez, lo deshabilitamos para que no se
    // le de dos veces
})

$('input[name="name"]').change(function() {
    const nameValue = $(this).val()
    const buttonTarget = $('#create-card-button')

    if (nameValue) {
        buttonTarget.prop('disabled', false)
    } else {
        buttonTarget.prop('disabled', 'disabled')
    }
})


// TODO AL hacer click en una carta quiero ver un console.log en la Consola
// Posteriormente quiero ver el mensaje de success que diga "Has clicado la carta con id: XXXXXXXXXX"

const showNotification = function(message, isError = false) {

    let notification = $(
        '<div>'
    ).addClass('alert alert-success').prop('role', 'alert')
    notification.text(message)

    if (isError) {
        notification.removeClass(
            'alert-success'
        ).addClass('alert-danger')
    }

    $(
        '#notifications'
    ).empty().append(notification)
}

$('.card-item').click(function() {
    const cardId = $(this).data('card-id')
    const message = `Has clicado el elemento con id: ${cardId}`
    showNotification(message)
})