let cantidad_dias   = prompt("Cantidad de dias");
let alojamiento     = prompt("Valor dia de Alojamiento");
let comida          = prompt("Precio Mercaderia por dia");
let entretencion    = prompt("Gasto Entretencion por dia");

if ((parseInt(cantidad_dias) === 0) || (parseInt(cantidad_dias) === '')) {
    cantidad_dias = 0;
}

if ((parseInt(alojamiento) === 0) || (parseInt(alojamiento) === '')) {
    alojamiento = 0;
}

if ((parseInt(comida) === 0) || (parseInt(comida) === '')) {
    comida = 0;
}

if ((parseInt(entretencion) === 0) || (parseInt(entretencion) === '')) {
    entretencion = 0;
}


class Calcular {
    constructor(cantidad_dias, alojamiento, comida, entretencion) {
        this.cantidad_dias  = parseInt(cantidad_dias);
        this.alojamiento    = parseInt(alojamiento);
        this.comida         = parseInt(comida);
        this.entretencion   = parseInt(entretencion);        
    }
    
    promedio(){
        let salida = '';
        if (this.cantidad_dias > 0){
            this.precio = (this.alojamiento * this.cantidad_dias) + this.entretencion +this.comida;

            let salida = {
                cantidad: this.cantidad_dias,
                alojamiento: this.alojamiento,
                entretencion: this.entretencion,
                comida: this.comida,
                precio: function () {
                  console.log(" El precio Final es: " + this.precio);
                },
              };
        } 
        else{
            this.precio = 0;

            let salida = {
                cantidad: 0,
                alojamiento: 0,
                entretencion: 0,
                comida: 0,
                precio: function () {
                  console.log(" El precio Final es: " + this.precio);
                },
              };
        }

        return salida;
    }
}

const calculo1 = new Calcular(cantidad_dias, alojamiento, comida, entretencion);
console.table([calculo1]);
//console.table(calculo1.promedio());

