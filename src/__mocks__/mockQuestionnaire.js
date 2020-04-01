export const mockQuestionnaire = {
  id: 1,
  code: 'TRIAGE1',
  title: 'Triage (hospitales)',
  description:
    'Triage realizado para personas que asisten por primera vez al hospital por sospecha de infeccion con COVID19',
  items: [
    {
      code: 'OLFATO',
      order: 4,
      text: 'Presenta alguna alteracion del olfato?',
      item_type: 'boolean',
      required: true,
      max_length: 5,
    },
    {
      code: 'DISNEA',
      order: 3,
      text: 'Presenta disnea (dificultad respiratoria)?',
      item_type: 'boolean',
      required: true,
      max_length: 5,
    },
    {
      code: 'CONTACT',
      order: 2,
      text: 'Ha tenido contacto con alguien infectado con el COVID19?',
      item_type: 'boolean',
      required: true,
      max_length: 5,
    },
    {
      code: 'TOS',
      order: 1,
      text: 'Tos?',
      item_type: 'boolean',
      required: true,
      max_length: 7,
    },
  ],
};
