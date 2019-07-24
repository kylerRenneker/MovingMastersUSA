
$('.quote-form').on('submit', ev => {
    ev.preventDefault()
    console.log(ev.target)

    const { zipFrom, zipTo, moveSize, name, email, phone } = ev.target
    const newLead = {
        from: zipFrom.value,
        to: zipTo.value,
        size: moveSize.value,
        name: name.value,
        email: email.value,
        phone: phone.value
    }

    console.log(JSON.stringify(newLead))

})

