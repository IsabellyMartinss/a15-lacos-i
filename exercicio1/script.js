let comida = prompt('Deseja mais coxinhas? digite S para Sim e N para não.')
let conta = 0

while(comida=='S'){
comida = prompt('Deseja mais coxinhas? digite S para Sim e N para não.')
conta = conta + 2.50
if(comida ==='N'){
    console.log(conta)
}
}

