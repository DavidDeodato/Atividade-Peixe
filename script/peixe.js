//definir as configurações da página

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: jogo,
        create: create,
        update: update,
    }
}

// definindo a variavél do jogo e a do peixe

var game = new Phaser.Game(config);
var baiacu;

// adicionando as funções necessárias para o jogo funcionar

// carregando as imagens do fundo/cenário
function jogo() {
    this.load.image("mar", "assets/bg_azul-claro.png");
    this.load.image("logo", "assets/logo-inteli_azul.png");
    this.load.image("concha", "assets/concha.png")
    this.load.image("crustaceo", "assets/crustaceo.png")

    //atribuindo o baiacu em uma viriável

baiacu = this.load.image("baiacu", "assets/baiacu.png");


}

//carregando as imagens na tela 

function create(){
    this.add.image(400,300, "mar").setScale(2.2);
    this.add.image(1070, 80, "logo").setScale (0.75);
    this.add.image(100, 101, "concha").setScale (2.5);
    this.add.image(200, 400, "crustaceo").setScale (2.0);

    //adicionando o baiacu no jogo
    baiacu = this.add.image(400, 300, "baiacu").setOrigin(0.5,0.5);
    baiacu.setFlip(true, false);
}


function update() {

//configurando para o baiacu poder virar
    if (this.input.x > baiacu.x) {
        baiacu.setFlip(true, false);
    } else {
        baiacu.setFlip(false, false);
    }

//fazendo o baiacu se mover na tela 
baiacu.x = this.input.x;
baiacu.y = this.input.y;

}

console.log("Não, nunca programei na vida. Está sendo uma experiência desafiadora, mas espero melhorar")
