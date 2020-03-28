import React from "react";

import { ItemType, QuestionnaireItemOptionBoolean } from "../QuestionnaireItem";

// Import css modules stylesheet as styles
// TODO: use right styles
import styles from "Theme/theme.css";

const QuestionnaireItemOptionType = {
    [ItemType.BOOLEAN]: QuestionnaireItemOptionBoolean
};

export const QuestionnaireItemWizard = ({
    onSelectResponse,
    questionnaireItem
}) => {
    const QuestionnaireItemOption =
        QuestionnaireItemOptionType[questionnaireItem.item_type];
    return (
        <div className={styles.questionnaireItemWizard}>
            <h1>{questionnaireItem.text}</h1>
            <QuestionnaireItemOption
                type={"wizard"}
                onSelectResponse={onSelectResponse}
                questionnaireItem={questionnaireItem}
            />
        </div>
    );
};
