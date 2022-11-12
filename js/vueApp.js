const baseUrl = "https://restcountries.com/v3.1/all"

const mainContainer = {
    data() {
        return {
            title: 'Países do Mundo',
            paises: []
        }
    },
    created() {
        this.obterPaises()
    },
    methods: {
        obterPaises() {
            axios
                .get(baseUrl)
                .then(response => {
                    response.data.forEach(element => {
                        this.paises.push(element)
                    })
                })
                .catch(function (error) {
                    toastr.error('Não foi possivel obter os países', 'Error')
                })
        }
    }
}
const paisComponent = {
    template: `
    <div class="card bg-light mb-3" style="width: 18rem;">
        <img class="card-img-top" v-bind:src="bandeira" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">{{nome}}</h4>
            <p class="card-text">CAPITAL: {{capital}}</p>
            <a v-bind:href="mapa" target="_blank" class="btn btn-outline-info">Ver no mapa</a>
        </div>
    </div>
    `,
    props: ['nome', 'capital', 'bandeira', 'mapa']
}

const app = Vue.createApp(mainContainer)

app.component('pais-component', paisComponent)

    .mount('#app')
