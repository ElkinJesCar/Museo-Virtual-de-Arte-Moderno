import express from 'express';
const router = express.Router();

const obras = [
  {
    id: 1,
    titulo: "Noche Estrellada",
    autor: "Vincent van Gogh",
    año: 1889,
    descripcion: "La pintura representa un paisaje nocturno con un cielo estrellado, un pueblo en la base de una montaña y un ciprés solitario en primer plano. La obra se caracteriza por su uso de la técnica del claroscuro y la expresividad de las pinceladas, típicos del estilo postimpresionista de van Gogh. ",
    imagen: "/img/obra1.jpg"
  },
  {
    id: 2,
    titulo: "Ultima Cena",
    autor: "Leonardo da Vinci",
    año: 1495,
    descripcion: "La Última Cena es una pintura mural que representa la última comida de Jesús con sus doce apóstoles, momentos antes de su crucifixión. La pintura muestra la reacción de los apóstoles al anuncio de Jesús de que uno de ellos lo traicionará. La escena es crucial en la tradición cristiana, marcando la institución de la eucaristía y el anuncio de la traición de Judas. ",
    imagen: "/img/obra2.jpg"
  },
  {
    id: 3,
    titulo: "La Mona Lisa",
    autor: "Leonardo da Vinci",
    año: 1503,
    descripcion: "La Mona Lisa, también conocida como La Gioconda, es un retrato de medio cuerpo de una mujer renacentista, pintado por Leonardo da Vinci entre 1503 y 1519. Es uno de los cuadros más famosos del mundo y se exhibe en el Museo del Louvre en París. ",
    imagen: "/img/obra3.jpg"
  },
  {
    id: 4,
    titulo: "Creacion de Adam",
    autor: "Miguel Ángel",
    año: 1511,
    descripcion: "Esta obra, parte de la serie de frescos que ilustran la creación del mundo según el Génesis, representa el momento en que Dios le da vida a Adán. ",
    imagen: "/img/obra4.jpg"
  },
  {
    id: 5,
    titulo: "La Virgen de las Rocas",
    autor: "Leonardo da Vinci",
    año: 1486,
    descripcion: "Muestra a la Virgen María, el Niño Jesús, San Juan Bautista y un ángel en una cueva rocosa. La Virgen y el ángel se arrodillan ante el Niño, quien bendice a San Juan Bautista. El paisaje rocoso y la vegetación crean una atmósfera natural y misteriosa. ",
    imagen: "/img/obra5.jpg"
  }
];

router.get('/', (req, res) => res.render('index'));
router.get('/inicio', (req, res) => res.redirect('/'));
router.get('/galeria', (req, res) => res.render('galeria', { obras }));
router.get('/obra/:id', (req, res) => {
  const obra = obras.find(o => o.id === parseInt(req.params.id));
  if (obra) {
    res.render('obra', { obra });
  } else {
    res.status(404).send('Obra no encontrada');
  }
});
router.get('/acerca', (req, res) => res.render('acerca'));

export { router };