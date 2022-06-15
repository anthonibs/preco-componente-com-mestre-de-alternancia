const values = [19.99, 29.99, 49.90]

const cardValores = document.querySelectorAll('.plan__value')
const plan = document.getElementById('switch')


function calcularAnual(values) {
    values.forEach((item, i) => {
        const convercao = (values[i].toFixed(2)).toString().replace('.', ',')

        cardValores[i].innerHTML = convercao
    });

}


plan.checked = true

plan.addEventListener('click', () => {
    if (plan.checked === true) {
        function planoValores(valuesPlan) {
            valuesPlan.forEach((item, index) => {

                item.innerHTML = (values[index].toFixed(2)).toString().replace(".", ",")

            })
        }

        planoValores(cardValores)

    } else {
        function planoValores(valuesPlan) {
            valuesPlan.forEach((item, index) => {

                const valoresAnual = (values[index] * 12).toFixed(2)
                item.innerHTML = valoresAnual.toString().replace(".", ",")

            })
        }

        planoValores(cardValores)

    }

})


calcularAnual(values)
