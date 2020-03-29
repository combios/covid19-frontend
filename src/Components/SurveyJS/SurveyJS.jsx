//In your react App.js or yourComponent.js file add these lines to import
import React, { Component } from "react";

import * as Survey from "survey-react";
import "survey-react/survey.css";

class SurveyJS extends Component {
    //Define Survey JSON
    //Here is the simplest Survey with one text question
    json = {
        "title": "Triage 1",
        "showProgressBar": "bottom",
        "showTimerPanel": "top",
        "firstPageIsStarted": false,
        "startSurveyText": "Evaluar condicion",
        "pages": [
            {
                "questions": [
                    {
                        "type": "radiogroup",
                        "name": "question-1",
                        "title": "¿Cuál es su temperatura actual?",
                        "choices": [
                            "Si",
                            "No"
                        ]
                    }
                ]
            },
            {
                "questions": [
                    {
                        "type": "radiogroup",
                        "name": "question-2",
                        "title": "¿Ha tenido contacto con personas contagiadas con COVID-19?",
                        "choices": [
                            "Si",
                            "No"
                        ]
                    }
                ]
            },
            {
                "questions": [
                    {
                        "type": "radiogroup",
                        "name": "question-3",
                        "title": "¿Tienes tos seca?",
                        "choices": [
                            "Si",
                            "No"
                        ]
                    }
                ]
            },
            {
                "questions": [
                    {
                        "type": "radiogroup",
                        "name": "question-4",
                        "title": "¿Tienes dificultades olfatorias?",
                        "choices": [
                            "Si",
                            "No"
                        ]
                    }
                ]
            }
        ],
        "completedHtml": "<h4>Gracias por sus respuestas..</h4>"
    };

    //Define a callback methods on survey complete
    onComplete(survey, options) {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
    render() {
        //Create the model and pass it into react Survey component
        //You may create survey model outside the render function and use it in your App or component
        //The most model properties are reactive, on their change the component will change UI when needed.
        var model = new Survey.Model(this.json);
        return <Survey.Survey model={model} onComplete={this.onComplete} />;
        /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
        //You may pass model properties directly into component or set it into model
        // <Survey.Survey model={model} mode="display"/>
        //or
        // model.mode="display"
        // <Survey.Survey model={model}/>
        // You may change model properties outside render function.
        //If needed react Survey Component will change its behavior and change UI.
    }
}

export default SurveyJS