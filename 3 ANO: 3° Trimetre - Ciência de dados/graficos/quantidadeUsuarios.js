import { getCSS } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = object.keys(dados)
const quantidadeUsuarios = object.values(dados)

const data = [
    {'--primary-color'
        x: nomeDasRedes, 
        y: quantidadedeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
]

const layout = {
    plot_bgcolor: getCSS ('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text:'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
            color getCSS ('--primary-color'),
            family: getCSS('--fonte'),
            size: 30
        }
    }
}

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)


}

quantidadeUsuarios()