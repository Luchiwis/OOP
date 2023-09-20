class Auto{
    constructor(modelo,año,color,precio){
        this.marca = "Jaguar";
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.precio = precio;
        this.patente = this.patenteAnterior+1;
        this.encendido = false;
        this.velocidad = 0;
        this.km = 0;
    }
    arrancar(){
        this.encendido = true;
    }
    acelerar(aceleracion){
        if (this.encendido){
            this.velocidad += aceleracion;
        }
        else{
            console.log("el auto no está encendido")
        }
        
    }
    frenar(){
        if (this.velocidad>100){
            this.#chocar()
        }
        this.velocidad = 0;
    }
    #chocar(){
        this.color = null;
        this.precio = 0;
        this.encendido = false;
        this.km = 0;
    }

}

class Torta{
    constructor(capas, ingredientes, tiempo_coccion, temperatura,relleno=null, colorante=null){
        this.capas = capas
        this.ingredientes = ingredientes
        this.relleno = relleno
        this.color = colorante
        this.tiempo_coccion = tiempo_coccion
        this.temperatura
        this.forma = "redonda"
    }
}
class Usuario{
    constructor(nickname,nombre,apellido,email,contraseña){
        // this.id = cantidad_usuarios
        this.nickname = nickname
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.contraseña = contraseña
        // cantidad_usuarios++
    }
}


class Mueble{
    constructor(nombre,ancho,alto,peso,material="madera",color="gray"){
        this.nombre = nombre
        this.ancho = ancho
        this.alto = alto
        this.peso = peso
        this.material = material
        this.color = color

        this.#crear_elemento()
    }
    #crear_elemento(){
        // crear elemento
        this.div = document.createElement("div")
        this.p_nombre = document.createElement("p")
        this.p_peso = document.createElement("p")

        this.div.classList.add("mueble")
        this.div.style.width = this.ancho +"px"
        this.div.style.height = this.alto +"px"
        this.div.style.backgroundColor = this.color

        this.p_nombre.innerText = this.nombre
        this.p_peso.innerText = this.peso +"kg"
        
        this.div.appendChild(this.p_nombre)
        this.div.appendChild(this.p_peso)
        document.querySelector("#grilla").appendChild(this.div)
    }

}

escritorio = new Mueble("escritorio",200,100,100,"madera","brown")
