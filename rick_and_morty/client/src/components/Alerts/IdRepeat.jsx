import Swal from "sweetalert2";


export const IdRepeat =() =>{
    Swal.fire({
      title: 'ID repetida, prueba con otra ID',
      imageUrl: 'https://hips.hearstapps.com/vidthumb/images/rick-morty-1571997817.jpg',
      imageWidth: 600,
      imageHeight: 300,
      background:'rgb(160, 237, 215)',
      color: 'black',
      allowOutsideClick:false,
      confirmButtonColor: 'rgb(13, 217, 17)'
    })
  }


export const NoId = () =>{
    Swal.fire({
        title: 'No hay personajes con ese ID',
        imageUrl: 'https://i.ytimg.com/vi/0fAbLH_gFag/maxresdefault.jpg',
        imageWidth: 600,
        imageHeight: 300,
        background:'rgb(160, 237, 215)',
        color: 'black',
        allowOutsideClick:false,
        confirmButtonColor: 'rgb(13, 217, 17)'
      })
}

  