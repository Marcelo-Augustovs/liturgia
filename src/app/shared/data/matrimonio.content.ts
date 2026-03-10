import { contentSideMenu } from "../models/content-side-menu.model";

export const MATRIMONIO_CONTENT: contentSideMenu[] = [

  {
    menuTitle: 'Matrimonio',
    leftSubTitle: 'Organizar e Preparar',
    rightSubTitle: 'Rito',

    leftContent: [
      {
        title: "Preparação",
        items: [
          'Preparar ritual de matrimonio',
          'Verificar padrinhos',
          'Separar alianças'
        ]
      }
    ],
         
    rightContent: [
        {
               
          variationTitle: "Dentro da missa",

          sections: [

            {
              title: "Antes da Missa",
              texts: [
                "O celebrante acolhe os fiéis.",
                "Pode-se fazer uma breve introdução."
              ]
            },

            {
              title: "Mudanças no Rito",
              subTitle: "Depois da homilia",
              texts: [
                "Realiza-se o rito de bênção.",
                "Os fiéis respondem Amém."
              ]
            }

          ]
        },

        {
          variationTitle: "Fora da missa",

          sections: [

            {
              title: "Antes da Missa",
              texts: [
                "Procissão de entrada.",
                "Canto apropriado."
              ]
            },

            {
              title: "Bênção específica",
              texts: [
                "O celebrante estende as mãos.",
                "Recita a oração solene."
              ]
            }

          ]
        }

      ]
    }
];