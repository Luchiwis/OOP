const grilla = document.querySelector("#grilla")
const form = document.querySelector(".formulario")
const ancho_habitacion = document.querySelector("#ancho-habitacion")
const alto_habitacion = document.querySelector("#alto-habitacion")
const boton_habitacion = document.querySelector("#change-size")
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
        this.seleccionado = false

        this.#crear_elemento()
        this.#crear_eventos()
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
        this.div.style.transform = "translate(0,0)"
        
        this.div.appendChild(this.p_nombre)
        this.div.appendChild(this.p_peso)
        grilla.appendChild(this.div)
    }
    #crear_eventos(){
        this.div.addEventListener("click",()=>{
            this.seleccionado = !this.seleccionado
            this.div.classList.toggle("seleccionado")
        })
    }

    mover(evento){
        if (this.seleccionado){
            let pos_x
            let pos_y
            [pos_x, pos_y] = this.div.style.transform.split("(")[1].split(", ")
            pos_x = parseInt(pos_x)
            pos_y = parseInt(pos_y)
            if (evento.key == "ArrowRight"){
                this.div.style.transform = `translate(${pos_x+10}px,${pos_y}px)`
            }
            else if (evento.key == "ArrowDown"){
                this.div.style.transform = `translate(${pos_x}px,${pos_y+10}px)`
            }
            else if (evento.key == "ArrowLeft"){
                this.div.style.transform = `translate(${pos_x-10}px,${pos_y}px)`
            }
            else if (evento.key == "ArrowUp"){
                this.div.style.transform = `translate(${pos_x}px,${pos_y-10}px)`
            }
        }

        
    }
}

// variables

muebles = []

escritorio = new Mueble("escritorio",200,100,100,"madera","brown")
muebles.push(escritorio)


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    nombre = form.querySelector("#nombre-mueble").value
    ancho = form.querySelector("#ancho-mueble").value
    alto = form.querySelector("#alto-mueble").value
    peso = form.querySelector("#peso-mueble").value
    material= form.querySelector("#material-mueble").value
    color = form.querySelector("#color-mueble").value

    nuevo_mueble = new Mueble(nombre,ancho,alto,peso,material,color)
    muebles.push(nuevo_mueble)
})

window.addEventListener("keydown", (e)=>{
    for (i of muebles){
        i.mover(e)
    }
})
ancho_habitacion.addEventListener("change", ()=>{
    grilla.style.width = ancho_habitacion.value + "%"
})

alto_habitacion.addEventListener("change", ()=>{
    grilla.style.height = alto_habitacion.value + "px"
})