
let devsDB = [
    {
        'name': 'Fernando',
        'id': 1
    },
    {
        'name': 'Luis',
        'id': 2
    },
    {
        'name': 'Ana',
        'id': 3
    }
];
let cintasDB = [
    {
        'id': 1,
        'cinta': 'Roja'
    },
    {
        'id': 2,
        'cinta': 'Negra'
    }
]

const getDev = (id) => {
    return new Promise( (resolve, reject) => {
        let developer = devsDB.find(dev => dev.id === id);
        if(!developer) {
            reject(`El dev con Id ${id} no existe`);
        } else {
            resolve(developer)
        }
    })
};

const getCinta = (dev) => {
    return new Promise( (resolve, reject) => {
        let cintaDB = cintasDB.find(cinta => cinta.id === dev.id);
        if(!cintaDB) {
            reject(`No existe cinta para el dev ${dev.name}`);
        } else {
            resolve({
                cinta: cintaDB.cinta, 
                dev : dev.name
            });
        }
    });
};

// getDev(3)
//     .then(res => {
//         //console.log(res)
//         getCinta(res)
//             .then(data => {
//                 console.log(`El dev ${data.dev} esta en la cinta ${data.cinta} `)
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

