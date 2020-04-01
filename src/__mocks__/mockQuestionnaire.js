export const mockQuestionnaire = {
  title: 'Triage 1',
  showProgressBar: 'bottom',
  showTimerPanel: 'top',
  firstPageIsStarted: false,
  startSurveyText: 'Evaluar condicion',
  pages: [
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'question-1',
          title: '¿Cuál es su temperatura actual?',
          choices: ['Si', 'No'],
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'question-2',
          title: '¿Ha tenido contacto con personas contagiadas con COVID-19?',
          choices: ['Si', 'No'],
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'question-3',
          title: '¿Tienes tos seca?',
          choices: ['Si', 'No'],
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'question-4',
          title: '¿Tienes dificultades olfatorias?',
          choices: ['Si', 'No'],
        },
      ],
    },
  ],
  completedHtml: '<h4>Gracias por sus respuestas..</h4>',
};
