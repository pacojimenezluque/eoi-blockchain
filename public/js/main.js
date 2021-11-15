console.log('Hola')

$('.delete-card-item').click(function() {
    console.log('Clicado')
    alert('Clicado')
    console.log(this.data)
    $('#delete-card-button').prop('href', '...') // Prop href + id que me viene del data
})