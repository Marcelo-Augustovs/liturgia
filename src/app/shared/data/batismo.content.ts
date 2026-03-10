import { contentSideMenu } from "../models/content-side-menu.model";

export const BATISMO_CONTENT: contentSideMenu[] = [

  {
    menuTitle: 'Batismo Adulto',
    leftSubTitle: 'Organizar e Preparar',
    rightSubTitle: 'Rito',

    leftContent: [
      {
        title: "Preparação",
        items: [
          'Ritual do Batismo(marcar)',
          'Pia Bastimal(encher)',
          'Registro no livro de batismo(separar)',
          'Lembrança do batismo(confecionar)',
          'Oleo do crisma(separar)',
          'vela e veste branca(separar)',
        ]
      },
      {
        title: "Comunicar e orientar",
        items: [
          'padrinhos(sobre as vestes e conduta)',
          'confirmar horário e dia'
        ]
      }
    ],

    rightContent: [
        {
          variationTitle: "Rito Simples",

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
          variationTitle: "Forma Solene",

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
    },

    {
      menuTitle: 'Batismo Crianças',
      leftSubTitle: 'Organizar e Preparar',
      rightSubTitle: 'Rito',

      leftContent: [
        {
          title: "Preparação",
          items: [
            'Ritual do Batismo(marcar)',
            'Pia Bastimal(encher)',
            'Registro no livro de batismo(separar)',
            'Lembrança do batismo(confecionar)',
            'Oleo do crisma(separar)',
            'vela e veste branca(separar)',
            'concha',
            'sal'
          ]
        },
        {
          title: "Comunicar e orientar",
          items: [
            'pais',
            'padrinhos(sobre as vestes e conduta)',
            'confirmar horário e dia'
          ]
        }
      ],

     rightContent: [
           {
              variationTitle: "Uma Criança",
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
                variationTitle: "Várias Crianças",
                sections: [

                  {
                    title: "Antes da Missa",
                    texts: [
                      "Procissão de entrada.",
                      "Canto apropriado."
                    ]
                  },

                  {
                    title: "Benção específica",
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