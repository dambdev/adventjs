// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = 'bici coche balón _playstation bici coche peluche';

export default function listGifts(letter) {
    const regalos = letter
        .trim()
        .split(' ')
        .filter((regalo) => regalo !== '' && !regalo.startsWith('_'));

    const regalosObj = {};
    regalos.forEach((regalo) => {
        regalosObj[regalo] = (regalosObj[regalo] || 0) + 1;
    });
    return regalosObj;
}

const regalos = listGifts(carta);

console.log(regalos);

/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
