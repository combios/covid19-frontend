export const mockQuestionnaire = [
    {
        id: 1,
        description: "Algoritmo: Triage NO RX",
        code: "TNX-1",
        questionnaireItems: [
            {
                code: "Q-1",
                order: 1,
                text:
                    "Tu temperatura corporal esta por encima de 38 grados centigrados?",
                item_type: "boolean",
                required: true,
                max_length: 999,
                answer_option: null
            },
            {
                code: "Q-2",
                order: 2,
                text: "Tienes tos seca?",
                item_type: "boolean",
                required: true,
                max_length: 999,
                answer_option: null
            },
            {
                code: "Q-3",
                order: 3,
                text: "Has tenido contacto con un infectado?",
                item_type: "boolean",
                required: true,
                max_length: 999,
                answer_option: null
            },
            {
                code: "Q-4",
                order: 4,
                text: "Tienes dificultad para respirar?",
                item_type: "boolean",
                required: true,
                max_length: 999,
                answer_option: null
            },
            {
                code: "Q-5",
                order: 5,
                text: "Tienes alteración en el olfato?",
                item_type: "boolean",
                required: true,
                max_length: 999,
                answer_option: null
            }
        ]
    }
];
