<<<<<<< HEAD
const clientes = [{
        nome: 'Andre',
        cpf: '12543652266',
        dependentes: [{
            nome: "sara",
            parentesco: "filha",
            dataNasc: "04/01/20140"
        }],
    },
    {
        nome: "Juliana",
        cpf: "1564132151653",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

=======
const clientes = [{
        nome: 'Andre',
        cpf: '12543652266',
        dependentes: [{
            nome: "sara",
            parentesco: "filha",
            dataNasc: "04/01/20140"
        }],
    },
    {
        nome: "Juliana",
        cpf: "1564132151653",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

>>>>>>> a5886aee4cdf3243de32869e414ae1db0e084ccf
console.log(listaDependentes)