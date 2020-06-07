import React from 'react';
import ReactDOM from 'react-dom'
import RubricRow from './RubricRow'
import RubricCol from './RubricCol'
import RubricItemList from './RubricItemList';
import RubricItem from './RubricItem';
import RubricHeader from './RubricHeader';

export default class Rubric extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            assignmentDescription: "Modified IB Written (Text Type) Assessment Rubric (15pts)",
            categories: ["Language", "Message", "Conceptual Understanding"],
            rows: [
                { 
                    headerContent: "<u>Superior</u> Application of Language, Message and Conceptual Understanding",
                    points: 5,
                    cells: [
                        [
                            "Varied complexity of grammar",
                            "Sophisticated/complex structures used effectively",
                            "Vocab appropriate and varied with distinct idiomatic expressions",
                            "Language is accurate except for perhaps an occasional minor error in complex structures",
                        ],
                        [
                            "Ideas are fully developed, providing strong details, relevant examples and evidence",
                            "Superior level of substantiating one's claim",
                            "Ideas are clearly structured in a logical manner, which strongly support the delivery of the message",
                        ],
                        [
                            "The choice of text type is clearly appropriate to the context, purpose and audience.",
                            "The register and tone are clearly appropriate to the context, purpose and audience of the task.",
                            "The response fully incorporates the conventions of the chosen text.",
                        ],
                    ],
                },
                { 
                    headerContent: "<u>Proficient</u> Application of Language, Message and Conceptual Understanding",
                    points: 4,
                    cells: [
                        [
                            "A mix of basic and complex grammar used",
                            "Vocab appropriate and varied",
                            "Occasional errors in both basic and complex grammatical structures",
                            "Errors do not interfere with communication",
                        ],
                        [
                            "Most ideas are relevant",
                            "Ideas are adequately developed which include some details/examples",
                            "Ideas are structured in a manner, which generally supports the delivery",
                        ],
                        [
                            "The choice of text type is generally appropriate to the context, purpose and audience.",
                            "The register and tone, while occasionally appropriate to the context, purpose and audience of the task, fluctuate throughout the response.",
                            "The response incorporates some conventions of the chosen text type.",
                        ],
                    ],
                },
                { 
                    headerContent: "<u>Limited</u> Application of Language, Message and Conceptual Understanding",
                    points: 3,
                    cells: [
                        [
                            "Vocab is generally appropriate",
                            "Mostly basic grammar structures",
                            "Language is mostly accurate for basic structures",
                            "Errors in more complex structures",
                            "Errors at times interfere with communication",
                        ],
                        [
                            "Some ideas are relevant to the task",
                            "Ideas outlined but not fully developed",
                            "Ideas are presented and structured in a way that leads to a more or less successful delivery of the message",
                        ],
                        [
                            "The choice of text type is partially appropriate to the context, purpose or audience.",
                            "The register and tone are partially appropriate to the context, purpose, and audience of the task.",
                            "The response incorporates limited recognizable conventions of the chosen text type.",
                        ],
                    ],
                },
                { 
                    headerContent: "<u>Still Developing</u> Application of Language, Message and Conceptual Understanding",
                    points: 2,
                    cells: [
                        [
                            "Vocab is sometimes appropriate to the task",
                            "Basic grammatical structures are used",
                            "Language contains errors in basic structures",
                            "Errors interfere with communication.",
                        ],
                        [
                            "Few ideas are relevant to the task",
                            "Ideas are stated but with no development",
                            "Ideas are not clearly presented and do not follow a structure making the message difficult to determine.",
                        ],
                        [
                            "The choice of text type is generally inappropriate to the context, purpose or audience.",
                            "The register and tone are inappropriate to the context, purpose, and audience of the task.",
                            "The response incorporates little to no recognizable conventions of the chosen text type.",
                        ],
                    ],
                },
            ],
        }
       
        this.state.selectedMatrix = []

        this.state.rows.forEach((row, rowIndex) => {
            this.state.selectedMatrix.push([])
            row.cells.forEach((cell, colIndex) => {
                this.state.selectedMatrix[rowIndex].push([])
                cell.forEach((element, itemIndex) => {
                    this.state.selectedMatrix[rowIndex][colIndex].push([])
                    this.state.selectedMatrix[rowIndex][colIndex][itemIndex] = false
                });
            });
        });

        this.state.scores = this.calculateColScores()

        this.onRubricItemClick = this.onRubricItemClick.bind(this);
    }

    render() {

        return (
        <div className="container">
            <table className="table table-sm table-bordered" style={{fontSize: ".8em"}}>
                <thead>
                    <RubricRow>
                        <RubricCol header={true}>
                            {this.state.assignmentDescription}
                        </RubricCol>
                        {this.state.categories.map((item, i) => {
                            return (
                                <RubricHeader key={i} score={this.state.scores[i]}>
                                    {item}
                                </RubricHeader>
                            )
                        })}
                    </RubricRow>
                </thead>
                <tbody>
                    {this.state.rows.map((item, i) => {
                        return (
                            <RubricRow key={i}>
                                <RubricCol>
                                    <p>
                                        <strong>{item.points}</strong><br/>
                                        <span dangerouslySetInnerHTML={{__html: item.headerContent}}></span>
                                    </p>
                                </RubricCol>
                                {item.cells.map((cell, j) => {
                                    return (
                                        <RubricCol key={j}>
                                            <RubricItemList row={i} col={j} key={j} items={cell} toggleSelected={this.onRubricItemClick.bind(this, i, j)} selectedMatrix={this.state.selectedMatrix[i][j]} />                                        
                                        </RubricCol>
                                    )
                                })}
                            </RubricRow>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    }

    onRubricItemClick(row, col, itemNumber) {
        this.state.selectedMatrix[row][col][itemNumber] = !this.state.selectedMatrix[row][col][itemNumber]

        this.setState({selectedMatrix: this.state.selectedMatrix, scores: this.calculateColScores()})
    }

    calculateColScores() {
        let scores = []

        this.state.categories.forEach((category, colIndex) => {
            //default score
            scores.push(this.state.rows[0].points)

            let sum = 0
            let count = 0

            this.state.selectedMatrix.forEach((row, rowIndex) => {
                row[colIndex].forEach(selected => {
                    if (selected) {
                        count++
                        sum += this.state.rows[rowIndex].points
                    }
                });
            });

            if (count > 0) {
                scores[colIndex] = Math.round(sum / count)
            }

        });

        return scores
    }
}