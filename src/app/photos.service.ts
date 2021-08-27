import { Injectable, OnInit } from '@angular/core';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  urlBase: string = 'https://fotos-casamento-mateus-liciara.s3-sa-east-1.amazonaws.com/Nossos+Momentos/'
  urlFinal: string = '.jpeg';

  urlBaseMelissa: string = 'https://fotos-casamento-mateus-liciara.s3-sa-east-1.amazonaws.com/Melissa/';

  urlBasePadrinhos: string = 'https://fotos-casamento-mateus-liciara.s3.sa-east-1.amazonaws.com/Padrinhos/';

  public photos: Photo[] = [
    new Photo(this.urlBase + '1' + this.urlFinal, 'Dia do pedido de namoro.'),
    new Photo(this.urlBase + '2' + this.urlFinal, 'Segundo final de semana juntos.'),
    new Photo(this.urlBase + '3' + this.urlFinal, 'O primeiro natal.'),
    new Photo(this.urlBase + '4' + this.urlFinal, 'Primeiro natal em Santa Barbara - MG'),
    new Photo(this.urlBase + '5' + this.urlFinal, 'Nossa primeira viagem.'),
    new Photo(this.urlBase + '6' + this.urlFinal, 'Primeira ida de Li em SP.'),
    new Photo(this.urlBase + '7' + this.urlFinal, 'Primeiro carnaval.'),
    new Photo(this.urlBase + '8' + this.urlFinal, 'Despedida Li.'),
    new Photo(this.urlBase + '9' + this.urlFinal, 'Dia da mudança.'),
    new Photo(this.urlBase + '10' + this.urlFinal, 'Primeiro passeio no Ibirapuera.'),
    new Photo(this.urlBase + '11' + this.urlFinal, 'Curtindo nossa piscininha.'),
    new Photo(this.urlBase + '12' + this.urlFinal, 'Show do Baco Exu dos Blues.'),
    new Photo(this.urlBase + '13' + this.urlFinal, 'Casamento do Danilo.'),
    new Photo(this.urlBase + '14' + this.urlFinal, 'Decorando nossa casa.'),
    new Photo(this.urlBase + '15' + this.urlFinal, 'Passeio Burle Marx.'),
    new Photo(this.urlBase + '16' + this.urlFinal, 'Comemoração dia 3.'),
    new Photo(this.urlBase + '17' + this.urlFinal, 'Casamento do Alan.'),
    new Photo(this.urlBase + '18' + this.urlFinal, 'Passeio na paulista.'),
    new Photo(this.urlBase + '19' + this.urlFinal, 'Nossa mocinha.'),
    new Photo(this.urlBase + '20' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '21' + this.urlFinal, 'Nosso segundo natal.'),
    new Photo(this.urlBase + '22' + this.urlFinal, 'Nossa segunda viagem.'),
    new Photo(this.urlBase + '23' + this.urlFinal, 'Lago Negro - Gramado.'),
    new Photo(this.urlBase + '24' + this.urlFinal, 'Nosso amor eternizado.'),
    new Photo(this.urlBase + '25' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '26' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '27' + this.urlFinal, 'Parque de Gelo.'),
    new Photo(this.urlBase + '28' + this.urlFinal, 'Igreja em Canela.'),
    new Photo(this.urlBase + '29' + this.urlFinal, 'Pintando quarto da princesa.'),
    new Photo(this.urlBase + '30' + this.urlFinal, 'Chá da Mel.'),
    new Photo(this.urlBase + '31' + this.urlFinal, 'Chá da Mel.'),
    new Photo(this.urlBase + '32' + this.urlFinal, 'Chá da Mel.'),
    new Photo(this.urlBase + '33' + this.urlFinal, 'Último dia antes do parto.'),
    new Photo(this.urlBase + '34' + this.urlFinal, 'Chegada da princesa.'),
    new Photo(this.urlBase + '35' + this.urlFinal, 'Chegada da princesa.'),
    new Photo(this.urlBase + '36' + this.urlFinal, 'Agora somos três.'),
    new Photo(this.urlBase + '37' + this.urlFinal, 'Primeiro final de semana de mel.'),
    new Photo(this.urlBase + '38' + this.urlFinal, 'Primeiro churrasco mel.'),
    new Photo(this.urlBase + '39' + this.urlFinal, 'Segundo dia dos namorados.'),
    new Photo(this.urlBase + '40' + this.urlFinal, 'Primeira festa junina.'),
    new Photo(this.urlBase + '41' + this.urlFinal, 'Voltando pra casa.'),
    new Photo(this.urlBase + '42' + this.urlFinal, 'Passeio na pracinha.'),
    new Photo(this.urlBase + '43' + this.urlFinal, 'Terceira viagem - Campos do Jordão.'),
    new Photo(this.urlBase + '44' + this.urlFinal, 'Primeira viagem com mel.'),
    new Photo(this.urlBase + '45' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '46' + this.urlFinal, 'Campos do Jordão.'),
    new Photo(this.urlBase + '47' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '48' + this.urlFinal, 'Primeira ida à praia com Mel.'),
    new Photo(this.urlBase + '49' + this.urlFinal, 'Primeira ida à praia com Mel.'),
    new Photo(this.urlBase + '50' + this.urlFinal, 'Segunda ida à praia.'),
    new Photo(this.urlBase + '51' + this.urlFinal, 'Primeira ida à paulista com mel.'),
    new Photo(this.urlBase + '52' + this.urlFinal, 'Primeiro natal com Mel.'),
    new Photo(this.urlBase + '53' + this.urlFinal, 'Terceira ida à praia com Mel.'),
    new Photo(this.urlBase + '54' + this.urlFinal, '30 anos de Li.'),
    new Photo(this.urlBase + '55' + this.urlFinal, 'S2'),
    new Photo(this.urlBase + '56' + this.urlFinal, 'Niver de Li.'),
    new Photo(this.urlBase + '57' + this.urlFinal, 'Primeira ida ao zoológico.'),
  ]

  public photosMelisa: Photo[] = [
    new Photo(this.urlBaseMelissa + '1' + this.urlFinal, 'A melhor surpresa das nossas vidas.'),
    new Photo(this.urlBaseMelissa + '2' + this.urlFinal, 'Quando descobrimos que seria uma princesa.'),
    new Photo(this.urlBaseMelissa + '3' + this.urlFinal, 'O dia em que conhecemos a mulher de nossas vidas.'),
    new Photo(this.urlBaseMelissa + '4' + this.urlFinal, 'Os olhos mais lindos!'),
    new Photo(this.urlBaseMelissa + '5' + this.urlFinal, 'A mais estilosa!'),
    new Photo(this.urlBaseMelissa + '6' + this.urlFinal, 'O rostinho mais meigo!'),
    new Photo(this.urlBaseMelissa + '7' + this.urlFinal, 'A mais risonha!'),
    new Photo(this.urlBaseMelissa + '8' + this.urlFinal, 'Adora uma praia!'),
    new Photo(this.urlBaseMelissa + '9' + this.urlFinal, 'Ama uma festinha!'),
    new Photo(this.urlBaseMelissa + '10' + this.urlFinal, 'Topa qualquer brincadeira!'),
    new Photo(this.urlBaseMelissa + '11' + this.urlFinal, 'Passeio no parque é com ela!'),
    new Photo(this.urlBaseMelissa + '12' + this.urlFinal, 'A dona de todo nosso AMOR!!!')
  ]

  public photosPadrinhos: Photo[] = [
    new Photo(this.urlBasePadrinhos + '1' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '2' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '3' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '4' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '5' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '6' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '7' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '8' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '9' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '10' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '11' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '12' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '13' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '14' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '15' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '16' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '17' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '18' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '19' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '20' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '21' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '22' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '23' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '24' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '25' + this.urlFinal, ''),
    new Photo(this.urlBasePadrinhos + '26' + this.urlFinal, '')  
  ]


  constructor() {

  }

}
