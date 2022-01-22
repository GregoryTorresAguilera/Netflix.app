import { Component, OnInit } from '@angular/core';
import { NetFlix, Film } from './models/Netflix';
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public netFlix: NetFlix;
  public sciFi: Film;
  public terror: Film;
  public comedy: Film;
  public drama: Film;
  public accion: Film;

  constructor() { 

this.netFlix = {
      nav: {
        logo: {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642706916/netflix/LOGO/580b57fcd9996e24bc43c529_oq4thg.png",
          alt: "Netflix Logo"
        }
      },
      hero: {
        title: "Los 5 más populares hoy",
        imgGallery: [
          {
            src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Top10/1-papel_hghzlw.webp",
            alt: "La casa de papel"
          },
          {
            src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705583/netflix/Top10/2-reina_br0fsk.webp",
            alt: "Reina"
          },
          {
            src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705583/netflix/Top10/3-titanes_ulfcph.webp",
            alt: "Titans"
          },
          {
            src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705583/netflix/Top10/4-lostinspace_hy2sdr.webp",
            alt: "Lost in Space"
          },
          {
            src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Top10/10-gooddoctor_xmekwe.webp",
            alt: "The Good Doctor"
          }
        ]
      }

    },
    this.accion = {
      title: "accion",
      imgGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705581/netflix/Accion/killbill2_wuwden.webp",
          alt: "Kill Bill 2"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Accion/renacido_ctkfws.webp",
          alt: "El Renacido"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705580/netflix/Accion/johnwick2_exprgz.webp",
          alt: "John Wick"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Accion/misionimposiblenacion_ntzpv2.webp",
          alt: "Mision Imposible"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705583/netflix/Accion/worldwarz_h4loos.webp",
          alt: "Guerra Mundial Z"
        }
      ]
    };
    this.drama = {
      title: "drama",
      imgGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705588/netflix/Drama/schindler_uhwlhx.webp",
          alt: "La lista de schindler"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705587/netflix/Drama/noespais_az6llu.webp",
          alt: "No es pais para viejos"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705587/netflix/Drama/sombradiablo_bakg0a.webp",
          alt: "La Sombra del diablo"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705587/netflix/Drama/salvaralsoldado_decbk4.webp",
          alt: "Salvar al soldado ryan"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705587/netflix/Drama/millaverde_rx3xlx.webp",
          alt: "La milla verde"
        }
      ]
    };
    this.comedy = {
      title: "Comedia",
      imgGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705584/netflix/Anime/evangelion_p5txry.webp",
          alt: "Evangelion"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705584/netflix/Anime/chihiro_m6u6tm.webp",
          alt: "El viaje de Chihiro"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705585/netflix/Anime/mononoke_yvhdac.webp",
          alt: "La princesa Mononoke"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705584/netflix/Anime/castilloambulante_g01l5y.webp",
          alt: "El castillo ambulante"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705585/netflix/Anime/perfectblue_hz0sj4.webp",
          alt: "Perfect Blue"
        }
      ]
    };
    this.sciFi = {
      title: "Ciencia ficción",
      imgGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705580/netflix/Sci-fi/gits_p6dkxt.webp",
          alt: "GITS"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705579/netflix/Sci-fi/deepimpact_cgwdbe.webp",
          alt: "Deep Impact"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705588/netflix/Sci-fi/12monos_qhglxx.webp",
          alt: "12 Monos"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705579/netflix/Sci-fi/core_aflg92.webp",
          alt: "Core"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705588/netflix/Sci-fi/6dia_tyajl7.webp",
          alt: "6 dia"
        }
      ]
    };
    this.terror = {
      title: "Terror",
      imgGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705581/netflix/Terror/apostol_fynyby.jpg",
          alt: "Apostol"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705581/netflix/Terror/calleterror_su550b.jpg",
          alt: "Calle Terror"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705581/netflix/Terror/life_vnivqh.webp",
          alt: "Life"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Terror/multiple_ns5irk.webp",
          alt: "Multiple"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642705582/netflix/Terror/reflejos_oignge.webp",
          alt: "Reflejos"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
