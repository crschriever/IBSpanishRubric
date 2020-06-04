import React from 'react';
import ReactDOM from 'react-dom'
import RubricRow from './RubricRow'
import RubricCol from './RubricCol'
import RubricItemList from './RubricItemList';
import RubricItem from './RubricItem';

export default class Rubric extends React.Component {

    render() {
        return (
        <div className="container">
            <table className="table table-sm table-bordered" style={{fontSize: ".8em"}}>
                <thead>
                    <RubricRow>
                        <RubricCol header={true}>
                            Modified IB Written (Text Type) Assessment Rubric (15pts)
                        </RubricCol>
                        <RubricCol header={true}>
                            Language
                        </RubricCol>
                        <RubricCol header={true}>
                            Message
                        </RubricCol>
                        <RubricCol header={true}>
                            Conceptual Understaning
                        </RubricCol>
                    </RubricRow>
                </thead>
                <tbody>
                    <RubricRow>
                        <RubricCol>
                            <p>
                                <strong>5</strong>
                                <br/>
                                <u>Superior</u> Application of Language, Message and Conceptual Understanding
                            </p>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                    <RubricItem>
                                        Varied complexity of grammar
                                    </RubricItem>
                                    <RubricItem>
                                        Sophisticated/complex structures used effectively
                                    </RubricItem>
                                    <RubricItem>
                                        Vocab appropriate and varied with distinct idiomatic expressions
                                    </RubricItem>
                                    <RubricItem>
                                        Language is accurate except for perhaps an occasional minor error in complex structures
                                    </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Ideas are fully developed, providing strong details, relevant examples and evidence
                                </RubricItem>
                                <RubricItem>
                                    Superior level of substantiating one's claim
                                </RubricItem>
                                <RubricItem>
                                    Ideas are clearly structured in a logical manner, which strongly support the delivery of the message    
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    The choice of text type is clearly appropriate to the context, purpose and audience.
                                </RubricItem>
                                <RubricItem>
                                    The register and tone are clearly appropriate to the context, purpose and audience of the task.
                                </RubricItem>
                                <RubricItem>
                                    The response fully incorporates the conventions of the chosen text.
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                    </RubricRow>
                    <RubricRow>
                        <RubricCol>
                            <p>
                                <strong>4</strong> <br/>
                                <u>Proficient</u> Application of Language, Message and Conceptual Understanding
                            </p>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    A mix of basic and complex grammar used
                                </RubricItem>
                                <RubricItem>
                                    Vocab appropriate and varied
                                </RubricItem>
                                <RubricItem>
                                    Occasional errors in both basic and complex grammatical structures
                                </RubricItem>
                                <RubricItem>
                                    Errors do not interfere with communication
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Most ideas are relevant
                                </RubricItem>
                                <RubricItem>
                                    Ideas are adequately developed which include some details/examples
                                </RubricItem>
                                <RubricItem>
                                    Ideas are structured in a manner, which generally supports the delivery
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    The choice of text type is generally appropriate to the context, purpose and audience.
                                </RubricItem>
                                <RubricItem>
                                    The register and tone, while occasionally appropriate
                                    to the context, purpose and audience of the task,
                                    fluctuate throughout the response.
                                </RubricItem>
                                <RubricItem>
                                    The response incorporates some conventions of the
                                    chosen text type.
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                    </RubricRow>
                    <RubricRow>
                        <RubricCol>
                            <p>
                                <strong>3</strong><br/>
                                <u>Limited</u> Application of Language, Message and Conceptual Understanding
                            </p>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Vocab is generally appropriate
                                </RubricItem>
                                <RubricItem>
                                    Mostly basic grammar structures
                                </RubricItem>
                                <RubricItem>
                                    Language is mostly accurate for basic structures
                                </RubricItem>
                                <RubricItem>
                                    Errors in more complex structures
                                </RubricItem>
                                <RubricItem>
                                    Errors at times interfere with communication
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Some ideas are relevant to the task
                                </RubricItem>
                                <RubricItem>
                                    Ideas outlined but not fully developed
                                </RubricItem>
                                <RubricItem>
                                    Ideas are presented and structured in a way that leads to a more or less successful delivery of the message
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    The choice of text type is partially appropriate to the context, purpose or audience.
                                </RubricItem>
                                <RubricItem>
                                    The register and tone are partially appropriate to the context, purpose, and audience of the task.
                                </RubricItem>
                                <RubricItem>
                                    The response incorporates limited recognizable conventions of the chosen text type.
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                    </RubricRow>
                    <RubricRow>
                        <RubricCol>
                            <p>
                                <strong>2</strong><br/>
                                <u>Still Developing</u> Application of Language, Message and Conceptual Understanding
                            </p>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Vocab is sometimes appropriate to the task
                                </RubricItem>
                                <RubricItem>
                                    Basic grammatical structures are used
                                </RubricItem>
                                <RubricItem>
                                    Language contains errors in basic structures
                                </RubricItem>
                                <RubricItem>
                                    Errors interfere with communication.
                                </RubricItem>

                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    Few ideas are relevant to the task
                                </RubricItem>
                                <RubricItem>
                                    Ideas are stated but with no development
                                </RubricItem>
                                <RubricItem>
                                    Ideas are not clearly presented and do not follow a structure making the message difficult to determine.
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                        <RubricCol>
                            <RubricItemList>
                                <RubricItem>
                                    The choice of text type is generally inappropriate to the context, purpose or audience.
                                </RubricItem>
                                <RubricItem>
                                    The register and tone are inappropriate to the context, purpose, and audience of the task.
                                </RubricItem>
                                <RubricItem>
                                    The response incorporates little to no recognizable conventions of the chosen text type.
                                </RubricItem>
                            </RubricItemList>
                        </RubricCol>
                    </RubricRow>
                </tbody>
            </table>
        </div>
        )
    }
}